import { styled, Typography } from "@mui/material";
import {
  Button,
  Container,
  Img,
  OverflowWithTooltip,
  Popup,
  Search,
  SelectedChip,
} from "components";
import { useDaosQuery } from "query/getters";
import { useCallback, useMemo, useState } from "react";
import { StyledFlexColumn, StyledFlexRow } from "styles";
import { useAirdropStore } from "../../store";
import _ from "lodash";
import { parseLanguage } from "utils";

import { VirtualList } from "components";
import { SubmitButtonContainer } from "../SubmitButton";
import { Dao } from "types";
import {
  StyledAirdropList,
  StyledListTitleContainer,
  StyledSelectedList,
  StyledSelectPopup,
} from "../../styles";
import { errorToast } from "toasts";

interface DaoRowProps {
  value: string;
}
function DaoRowContent({ value }: DaoRowProps) {
  const { data: daos, dataUpdatedAt } = useDaosQuery();

  const dao = useMemo(() => {
    return _.find(daos, { daoAddress: value });
  }, [dataUpdatedAt, value]);

  if (!dao) return null;

  return (
    <StyledDaoRowContent>
      <Img src={dao.daoMetadata.metadataArgs.avatar} />
      <StyledFlexColumn
        style={{ width: "auto", alignItems: "flex-start" }}
        gap={0}
        justifyContent="flex-start"
      >
        <OverflowWithTooltip
          hideTooltip
          text={parseLanguage(dao.daoMetadata.metadataArgs.name)}
          className="title"
        />
      </StyledFlexColumn>
    </StyledDaoRowContent>
  );
}

export const SelectDao = () => {
  const { data: allDaos, dataUpdatedAt } = useDaosQuery();
  const { daos, setDao, nextStep } = useAirdropStore();
  const [filterValue, setFilterValue] = useState("");
  const [open, setOpen] = useState(false);
  const filteredDaos = useMemo(() => {
    let result = allDaos;
    if (filterValue) {
      result = _.filter(allDaos, (dao) => {
        const name = parseLanguage(
          dao.daoMetadata.metadataArgs.name
        ).toLowerCase();
        return (
          name.includes(filterValue.toLowerCase()) ||
          dao.daoAddress.includes(filterValue)
        );
      }) as Dao[];
    }
    return _.map(result, (it) => it.daoAddress);
  }, [dataUpdatedAt, filterValue]);

  return (
    <StyledListTitleContainer
      title="Select a DAO space"
      headerComponent={
        <Button variant="text" onClick={() => setOpen(true)}>
          Select
        </Button>
      }
    >
      {_.isEmpty(daos) ? (
        <StyledFlexColumn className="not-selected">
          <Typography>Dao space not selected</Typography>
        
        </StyledFlexColumn>
      ) : (
        <StyledFlexColumn>
          <StyledSelectedList>
            {daos?.map((dao) => {
              return <SelectedDao address={dao} key={dao} />;
            })}
          </StyledSelectedList>
        </StyledFlexColumn>
      )}

      <StyledSelectPopup
        title="Select a DAO space"
        open={open}
        onClose={() => setOpen(false)}
      >
        <>
          <Search onChange={setFilterValue} />
          <StyledList
            RowComponent={DaoRowContent}
            data={filteredDaos || []}
            itemSize={56}
            selected={daos}
            onSelect={(dao) => {
              setDao(dao);
              setOpen(false);
            }}
            
          />
          <Button onClick={() => setOpen(false)}>Close</Button>
        </>
      </StyledSelectPopup>
    </StyledListTitleContainer>
  );
};


const SelectedDao = ({ address }: { address: string }) => {
  const { data, dataUpdatedAt } = useDaosQuery();
  const { setDao } = useAirdropStore();

  const dao = useMemo(() => {
    return _.find(data, { daoAddress: address });
  }, [dataUpdatedAt, address]);

  if (!dao) return null;
  return (
    <StyledSelectedDao onDelete={() => setDao(address)}>
      <StyledFlexRow gap={10}>
        <Img src={dao.daoMetadata.metadataArgs.avatar} />
        <Typography className="name">
          {parseLanguage(dao.daoMetadata.metadataArgs.name)}
        </Typography>
      </StyledFlexRow>
    </StyledSelectedDao>
  );
};

const StyledSelectedDao = styled(SelectedChip)({
  width: "auto!important",
  ".img": {
    width: 30,
    height: 30,
    borderRadius: "50%",
  },
  ".name": {
    fontWeight: 600,
    fontSize: 13,
  },
});

const StyledList = styled(VirtualList)({
  flex: 1,
  ".row-children": {
    paddingLeft: 10,
  },
});

const StyledDaoRowContent = styled(StyledFlexRow)({
  justifyContent: "flex-start",
  ".title": {
    fontWeight: 600,
  },
  ".img": {
    width: 37,
    height: 37,
    borderRadius: "50%",
  },
  ".overflow-with-tooltip": {
    flex: 1,
  },
});
