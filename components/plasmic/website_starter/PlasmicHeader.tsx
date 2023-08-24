// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3MD3YMHyr4CCDJ57rgVToC
// Component: tr-6NkU4A8

"use client";

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
import Button from "../../Button"; // plasmic-import: ngMo6kfq9Gg/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: iiA41ZQx55H/codeComponent

import { useScreenVariants as useScreenVariantslsNz11SgVt9 } from "./PlasmicGlobalVariant__Mobile"; // plasmic-import: lsNZ11SGVt9/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_website_starter.module.css"; // plasmic-import: 3MD3YMHyr4CCDJ57rgVToC/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: tr-6NkU4A8/css

import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: O-m1-dk8M4/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: h6oEZLAkBr/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: CJJCP5BT0l8/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 1KMY4qHZjsV/icon

createPlasmicElementProxy;

export type PlasmicHeader__VariantMembers = {
  menuOpen: "menuOpen";
  signedIn: "signedIn";
};
export type PlasmicHeader__VariantsArgs = {
  menuOpen?: SingleBooleanChoiceArg<"menuOpen">;
  signedIn?: SingleBooleanChoiceArg<"signedIn">;
};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>(
  "menuOpen",
  "signedIn"
);

export type PlasmicHeader__ArgsType = {
  dashboardUrl?: string;
  signOut?: (event: any) => void;
};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>(
  "dashboardUrl",
  "signOut"
);

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultHeaderProps {
  dashboardUrl?: string;
  signOut?: (event: any) => void;
  menuOpen?: SingleBooleanChoiceArg<"menuOpen">;
  signedIn?: SingleBooleanChoiceArg<"signedIn">;
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

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          dashboardUrl: "/signin" as const
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "showMenu",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "menuOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.menuOpen
      },
      {
        path: "signedIn",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.signedIn
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    mobile: useScreenVariantslsNz11SgVt9()
  });

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
        sty.root,
        {
          [sty.rootmenuOpen]: hasVariant($state, "menuOpen", "menuOpen"),
          [sty.rootmenuOpen_signedIn]:
            hasVariant($state, "signedIn", "signedIn") &&
            hasVariant($state, "menuOpen", "menuOpen"),
          [sty.rootsignedIn]: hasVariant($state, "signedIn", "signedIn")
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__sk0As, {
          [sty.freeBoxmenuOpen__sk0AsQlpT]: hasVariant(
            $state,
            "menuOpen",
            "menuOpen"
          )
        })}
      >
        {(hasVariant(globalVariants, "mobile", "mobileOnly") ? true : true) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__ri5Y, {
              [sty.freeBoxmenuOpen_signedIn__ri5YQlpTG6R3N]:
                hasVariant($state, "signedIn", "signedIn") &&
                hasVariant($state, "menuOpen", "menuOpen"),
              [sty.freeBoxsignedIn__ri5YG6R3N]: hasVariant(
                $state,
                "signedIn",
                "signedIn"
              )
            })}
          >
            <p.PlasmicLink
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link
              )}
              component={Link}
              href={`/`}
              platform={"nextjs"}
            >
              {"AquaLight Option"}
            </p.PlasmicLink>
            {(
              hasVariant(globalVariants, "mobile", "mobileOnly") ? true : true
            ) ? (
              <div
                className={classNames(projectcss.all, sty.freeBox__f5Y5U, {
                  [sty.freeBoxmenuOpen__f5Y5UQlpT]: hasVariant(
                    $state,
                    "menuOpen",
                    "menuOpen"
                  )
                })}
              >
                {(
                  hasVariant($state, "menuOpen", "menuOpen") &&
                  hasVariant(globalVariants, "mobile", "mobileOnly")
                    ? true
                    : hasVariant(globalVariants, "mobile", "mobileOnly")
                    ? (() => {
                        try {
                          return !$state.showMenu;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return true;
                          }
                          throw e;
                        }
                      })()
                    : true
                ) ? (
                  <Icon10Icon
                    className={classNames(projectcss.all, sty.svg__j1M6K, {
                      [sty.svgmenuOpen__j1M6KQlpT]: hasVariant(
                        $state,
                        "menuOpen",
                        "menuOpen"
                      )
                    })}
                    onClick={async event => {
                      const $steps = {};
                      $steps["updateMenuOpen"] = true
                        ? (() => {
                            const actionArgs = {
                              vgroup: __wrapUserFunction(
                                {
                                  type: "InteractionArgLoc",
                                  actionName: "updateVariant",
                                  interactionUuid: "KngdPyM7H",
                                  componentUuid: "tr-6NkU4A8",
                                  argName: "vgroup"
                                },
                                () => "menuOpen"
                              ),
                              operation: __wrapUserFunction(
                                {
                                  type: "InteractionArgLoc",
                                  actionName: "updateVariant",
                                  interactionUuid: "KngdPyM7H",
                                  componentUuid: "tr-6NkU4A8",
                                  argName: "operation"
                                },
                                () => 2
                              ),
                              value: __wrapUserFunction(
                                {
                                  type: "InteractionArgLoc",
                                  actionName: "updateVariant",
                                  interactionUuid: "KngdPyM7H",
                                  componentUuid: "tr-6NkU4A8",
                                  argName: "value"
                                },
                                () => "menuOpen"
                              )
                            };
                            return __wrapUserFunction(
                              {
                                type: "InteractionLoc",
                                actionName: "updateVariant",
                                interactionUuid: "KngdPyM7H",
                                componentUuid: "tr-6NkU4A8"
                              },
                              () =>
                                (({ vgroup, value }) => {
                                  if (typeof value === "string") {
                                    value = [value];
                                  }

                                  const oldValue = p.get($state, vgroup);
                                  p.set($state, vgroup, !oldValue);
                                  return !oldValue;
                                })?.apply(null, [actionArgs]),
                              actionArgs
                            );
                          })()
                        : undefined;
                      if (
                        typeof $steps["updateMenuOpen"] === "object" &&
                        typeof $steps["updateMenuOpen"].then === "function"
                      ) {
                        $steps["updateMenuOpen"] = await __wrapUserPromise(
                          {
                            type: "InteractionLoc",
                            actionName: "updateVariant",
                            interactionUuid: "KngdPyM7H",
                            componentUuid: "tr-6NkU4A8"
                          },
                          $steps["updateMenuOpen"]
                        );
                      }
                    }}
                    role={"img"}
                  />
                ) : null}
                {(
                  hasVariant($state, "menuOpen", "menuOpen") &&
                  hasVariant(globalVariants, "mobile", "mobileOnly")
                    ? true
                    : hasVariant(globalVariants, "mobile", "mobileOnly")
                    ? (() => {
                        try {
                          return $state.showMenu;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return true;
                          }
                          throw e;
                        }
                      })()
                    : false
                ) ? (
                  <Icon11Icon
                    className={classNames(projectcss.all, sty.svg__kBpYr, {
                      [sty.svgmenuOpen__kBpYrQlpT]: hasVariant(
                        $state,
                        "menuOpen",
                        "menuOpen"
                      )
                    })}
                    onClick={async event => {
                      const $steps = {};
                      $steps["updateMenuOpen"] = true
                        ? (() => {
                            const actionArgs = {
                              vgroup: __wrapUserFunction(
                                {
                                  type: "InteractionArgLoc",
                                  actionName: "updateVariant",
                                  interactionUuid: "p_Qxdwlmd",
                                  componentUuid: "tr-6NkU4A8",
                                  argName: "vgroup"
                                },
                                () => "menuOpen"
                              ),
                              operation: __wrapUserFunction(
                                {
                                  type: "InteractionArgLoc",
                                  actionName: "updateVariant",
                                  interactionUuid: "p_Qxdwlmd",
                                  componentUuid: "tr-6NkU4A8",
                                  argName: "operation"
                                },
                                () => 2
                              ),
                              value: __wrapUserFunction(
                                {
                                  type: "InteractionArgLoc",
                                  actionName: "updateVariant",
                                  interactionUuid: "p_Qxdwlmd",
                                  componentUuid: "tr-6NkU4A8",
                                  argName: "value"
                                },
                                () => "menuOpen"
                              )
                            };
                            return __wrapUserFunction(
                              {
                                type: "InteractionLoc",
                                actionName: "updateVariant",
                                interactionUuid: "p_Qxdwlmd",
                                componentUuid: "tr-6NkU4A8"
                              },
                              () =>
                                (({ vgroup, value }) => {
                                  if (typeof value === "string") {
                                    value = [value];
                                  }

                                  const oldValue = p.get($state, vgroup);
                                  p.set($state, vgroup, !oldValue);
                                  return !oldValue;
                                })?.apply(null, [actionArgs]),
                              actionArgs
                            );
                          })()
                        : undefined;
                      if (
                        typeof $steps["updateMenuOpen"] === "object" &&
                        typeof $steps["updateMenuOpen"].then === "function"
                      ) {
                        $steps["updateMenuOpen"] = await __wrapUserPromise(
                          {
                            type: "InteractionLoc",
                            actionName: "updateVariant",
                            interactionUuid: "p_Qxdwlmd",
                            componentUuid: "tr-6NkU4A8"
                          },
                          $steps["updateMenuOpen"]
                        );
                      }
                    }}
                    role={"img"}
                  />
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
        {(
          hasVariant($state, "menuOpen", "menuOpen") &&
          hasVariant(globalVariants, "mobile", "mobileOnly")
            ? true
            : hasVariant(globalVariants, "mobile", "mobileOnly")
            ? true
            : true
        ) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__pZgul, {
              [sty.freeBoxmenuOpen__pZgulQlpT]: hasVariant(
                $state,
                "menuOpen",
                "menuOpen"
              )
            })}
          >
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__c6Dd5, {
                  [sty.freeBoxmenuOpen__c6Dd5QlpT]: hasVariant(
                    $state,
                    "menuOpen",
                    "menuOpen"
                  )
                })}
              >
                <Button
                  className={classNames("__wab_instance", sty.button___3QiNj)}
                  color={"clear" as const}
                  link={`/`}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__r3Dta
                    )}
                  >
                    {"Home"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__iKdWr, {
                    [sty.buttonmenuOpen__iKdWrQlpT]: hasVariant(
                      $state,
                      "menuOpen",
                      "menuOpen"
                    )
                  })}
                  color={"clear" as const}
                  link={`/plans`}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__af036
                    )}
                  >
                    {"Plans"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__rp5Vh, {
                    [sty.buttonmenuOpen__rp5VhQlpT]: hasVariant(
                      $state,
                      "menuOpen",
                      "menuOpen"
                    ),
                    [sty.buttonsignedIn__rp5VhG6R3N]: hasVariant(
                      $state,
                      "signedIn",
                      "signedIn"
                    )
                  })}
                  color={"clear" as const}
                  link={`/contact`}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gFvVi
                    )}
                  >
                    {"Contact"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__bhGl)}
                  color={"clear" as const}
                  link={`/about`}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8Hpg
                    )}
                  >
                    {"About"}
                  </div>
                </Button>
              </p.Stack>
            ) : null}
            {(hasVariant($state, "signedIn", "signedIn") ? true : true) ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__oiL5F, {
                  [sty.freeBoxsignedIn__oiL5FG6R3N]: hasVariant(
                    $state,
                    "signedIn",
                    "signedIn"
                  )
                })}
              >
                {true ? (
                  <Button
                    className={classNames(
                      "__wab_instance",
                      sty.button___5Os7K,
                      {
                        [sty.buttonsignedIn___5Os7KG6R3N]: hasVariant(
                          $state,
                          "signedIn",
                          "signedIn"
                        )
                      }
                    )}
                    color={"clear" as const}
                    link={"/signin" as const}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__h54Ho,
                        {
                          [sty.textsignedIn__h54HoG6R3N]: hasVariant(
                            $state,
                            "signedIn",
                            "signedIn"
                          )
                        }
                      )}
                    >
                      {hasVariant($state, "signedIn", "signedIn")
                        ? "Dashboard"
                        : "Sign In"}
                    </div>
                  </Button>
                ) : null}
                <Button
                  className={classNames("__wab_instance", sty.button___7WXke, {
                    [sty.buttonsignedIn___7WXkeG6R3N]: hasVariant(
                      $state,
                      "signedIn",
                      "signedIn"
                    )
                  })}
                  color={"white" as const}
                  ghost={true}
                  link={
                    hasVariant($state, "signedIn", "signedIn")
                      ? ("" as const)
                      : ("/signup" as const)
                  }
                  onClick={async event => {
                    const $steps = {};
                  }}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wDoK,
                      {
                        [sty.textsignedIn__wDoKG6R3N]: hasVariant(
                          $state,
                          "signedIn",
                          "signedIn"
                        )
                      }
                    )}
                  >
                    {hasVariant($state, "signedIn", "signedIn")
                      ? "Sign Out"
                      : "Sign Up"}
                  </div>
                </Button>
              </p.Stack>
            ) : null}
            {(hasVariant($state, "signedIn", "signedIn") ? true : true) ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__t6FEm, {
                  [sty.freeBoxsignedIn__t6FEmg6R3N]: hasVariant(
                    $state,
                    "signedIn",
                    "signedIn"
                  )
                })}
              >
                {true ? (
                  <Button
                    className={classNames("__wab_instance", sty.button__s5LTq, {
                      [sty.buttonsignedIn__s5LTqG6R3N]: hasVariant(
                        $state,
                        "signedIn",
                        "signedIn"
                      )
                    })}
                    color={"clear" as const}
                    link={args.dashboardUrl}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__uc097,
                        {
                          [sty.textsignedIn__uc097G6R3N]: hasVariant(
                            $state,
                            "signedIn",
                            "signedIn"
                          )
                        }
                      )}
                    >
                      {hasVariant($state, "signedIn", "signedIn")
                        ? "Dashboard"
                        : "Dashboard"}
                    </div>
                  </Button>
                ) : null}
                <Button
                  className={classNames("__wab_instance", sty.button__mbDn9, {
                    [sty.buttonsignedIn__mbDn9G6R3N]: hasVariant(
                      $state,
                      "signedIn",
                      "signedIn"
                    )
                  })}
                  color={"white" as const}
                  ghost={
                    hasVariant($state, "signedIn", "signedIn")
                      ? true
                      : undefined
                  }
                  link={
                    hasVariant($state, "signedIn", "signedIn")
                      ? ("" as const)
                      : ("/signup" as const)
                  }
                  onClick={args.signOut}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vxotm,
                      {
                        [sty.textsignedIn__vxotmG6R3N]: hasVariant(
                          $state,
                          "signedIn",
                          "signedIn"
                        )
                      }
                    )}
                  >
                    {hasVariant($state, "signedIn", "signedIn")
                      ? "Sign Out"
                      : "Sign Out"}
                  </div>
                </Button>
              </p.Stack>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader__ArgsType,
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
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
