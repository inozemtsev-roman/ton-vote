import _ from "lodash";

export const routes = {
  spaces: "/",
  createSpace: '/setup',
  proposal: "/:spaceId/proposal/:proposalId",
  space: "/:spaceId",
  spaceAbout: "/:spaceId/about",
  createProposal: "/:spaceId/create",
};

export const flatRoutes = _.map(routes, (value) => {
  return { path: value };
});