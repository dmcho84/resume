import asyncComponent from "lib/asyncComponent";

export const Resume = asyncComponent(() => import("./Resume"));
export const NotFoundPage = asyncComponent(() => import("./NotFoundPage"));
