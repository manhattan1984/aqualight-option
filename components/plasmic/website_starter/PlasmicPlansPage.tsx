// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3MD3YMHyr4CCDJ57rgVToC
// Component: YH2nQETug0B

"use client";

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  usePlasmicDataConfig,
  executePlasmicDataOp,
  usePlasmicDataOp
} from "@plasmicapp/react-web/lib/data-sources";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Plan from "../../Plan"; // plasmic-import: O7uwZKiaC-/component
import Button from "../../Button"; // plasmic-import: ngMo6kfq9Gg/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: iiA41ZQx55H/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_website_starter.module.css"; // plasmic-import: 3MD3YMHyr4CCDJ57rgVToC/projectcss
import sty from "./PlasmicPlansPage.module.css"; // plasmic-import: YH2nQETug0B/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: CJJCP5BT0l8/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 1KMY4qHZjsV/icon

createPlasmicElementProxy;

export type PlasmicPlansPage__VariantMembers = {};
export type PlasmicPlansPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlansPage__VariantsArgs;
export const PlasmicPlansPage__VariantProps = new Array<VariantPropType>();

export type PlasmicPlansPage__ArgsType = {};
type ArgPropType = keyof PlasmicPlansPage__ArgsType;
export const PlasmicPlansPage__ArgProps = new Array<ArgPropType>();

export type PlasmicPlansPage__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
  plan?: p.Flex<typeof Plan>;
  button?: p.Flex<typeof Button>;
};

export interface DefaultPlansPageProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPlansPage__RenderFunc(props: {
  variants: PlasmicPlansPage__VariantsArgs;
  args: PlasmicPlansPage__ArgsType;
  overrides: PlasmicPlansPage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    getPlans: usePlasmicDataOp(
      (() => {
        try {
          return {
            sourceId: "oV6crd6Pr2ohtAZB9kw64X",
            opId: "6e035316-5c4e-46aa-b170-841f558d77d1",
            userArgs: {},
            cacheKey: "plasmic.$.VvHfAmMhI.$.",
            invalidatedKeys: null,
            roleId: null
          };
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          } else {
            throw e;
          }
        }
      })()
    )
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
  }

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <section
        data-plasmic-name={"section"}
        data-plasmic-override={overrides.section}
        className={classNames(projectcss.all, sty.section)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__wei5M)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__sPrj6
            )}
          >
            {"Plans"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__j22Y2
            )}
          >
            {"Explore Our Investment Plans"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___51LLs)}>
            {(
              (() => {
                try {
                  return $queries.getPlans.data;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })() ?? []
            ).map((currentItem, currentIndex) => (
              <Plan
                data-plasmic-name={"plan"}
                data-plasmic-override={overrides.plan}
                className={classNames("__wab_instance", sty.plan)}
                key={currentIndex}
                slot2={
                  <React.Fragment>
                    {(() => {
                      try {
                        return currentItem.interest + "%";
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "10%";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                }
                slot3={
                  <React.Fragment>
                    {(() => {
                      try {
                        return new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                          maximumSignificantDigits: 3
                        }).format(currentItem.minimum);
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "$500";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                }
                slot4={
                  <Button
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                    color={"teal" as const}
                    link={(() => {
                      try {
                        return "/dashboard/plans/" + currentItem.name;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "/signup";
                        }
                        throw e;
                      }
                    })()}
                  >
                    {"Invest Now"}
                  </Button>
                }
                slot6={
                  <React.Fragment>
                    {(() => {
                      try {
                        return new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                          maximumSignificantDigits: 3
                        }).format(currentItem.maximum);
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "$500";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                }
                slot7={
                  <React.Fragment>
                    {(() => {
                      try {
                        return currentItem.duration;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "1";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                }
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return currentItem.name;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Starter Pack";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </Plan>
            ))}
          </div>
        </div>
      </section>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section", "plan", "button"],
  section: ["section", "plan", "button"],
  plan: ["plan", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  plan: typeof Plan;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlansPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlansPage__VariantsArgs;
    args?: PlasmicPlansPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlansPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPlansPage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPlansPage__ArgProps,
          internalVariantPropNames: PlasmicPlansPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPlansPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlansPage";
  } else {
    func.displayName = `PlasmicPlansPage.${nodeName}`;
  }
  return func;
}

export const PlasmicPlansPage = Object.assign(
  // Top-level PlasmicPlansPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    plan: makeNodeComponent("plan"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicPlansPage
    internalVariantProps: PlasmicPlansPage__VariantProps,
    internalArgProps: PlasmicPlansPage__ArgProps
  }
);

export default PlasmicPlansPage;
/* prettier-ignore-end */
