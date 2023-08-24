// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3MD3YMHyr4CCDJ57rgVToC
// Component: O7uwZKiaC-

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_website_starter.module.css"; // plasmic-import: 3MD3YMHyr4CCDJ57rgVToC/projectcss
import sty from "./PlasmicPlan.module.css"; // plasmic-import: O7uwZKiaC-/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: CJJCP5BT0l8/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 1KMY4qHZjsV/icon

createPlasmicElementProxy;

export type PlasmicPlan__VariantMembers = {};
export type PlasmicPlan__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlan__VariantsArgs;
export const PlasmicPlan__VariantProps = new Array<VariantPropType>();

export type PlasmicPlan__ArgsType = {
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  children?: React.ReactNode;
  slot4?: React.ReactNode;
  slot5?: React.ReactNode;
  slot6?: React.ReactNode;
  slot7?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPlan__ArgsType;
export const PlasmicPlan__ArgProps = new Array<ArgPropType>(
  "slot",
  "slot2",
  "slot3",
  "children",
  "slot4",
  "slot5",
  "slot6",
  "slot7"
);

export type PlasmicPlan__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultPlanProps {
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  children?: React.ReactNode;
  slot4?: React.ReactNode;
  slot5?: React.ReactNode;
  slot6?: React.ReactNode;
  slot7?: React.ReactNode;
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

function PlasmicPlan__RenderFunc(props: {
  variants: PlasmicPlan__VariantsArgs;
  args: PlasmicPlan__ArgsType;
  overrides: PlasmicPlan__OverridesType;
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
      <div className={classNames(projectcss.all, sty.freeBox__uej5H)}>
        {p.renderPlasmicSlot({
          defaultContents: "Starter Pack",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__qglU8)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__izUOh)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zO8I0
              )}
            >
              {"Minimum"}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__gUK)}>
              {p.renderPlasmicSlot({
                defaultContents: "$500",
                value: args.slot3,
                className: classNames(sty.slotTargetSlot3)
              })}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__xWp80)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0Mz97
              )}
            >
              {"Maximum"}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___92EJt)}>
              {p.renderPlasmicSlot({
                defaultContents: "$500",
                value: args.slot6,
                className: classNames(sty.slotTargetSlot6)
              })}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__etPej)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2GvEr
              )}
            >
              {"Daily Income"}
            </div>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__vb3)}>
                <div className={classNames(projectcss.all, sty.freeBox__jsFJ)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__b7Oo)}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: "10%",
                      value: args.slot2,
                      className: classNames(sty.slotTargetSlot2)
                    })}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__do8Dx)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___9KIwa
              )}
            >
              {"Lifespan"}
            </div>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__qtDxU)}>
                <div className={classNames(projectcss.all, sty.freeBox__tQjod)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__lnP55)}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: "5%",
                      value: args.slot7,
                      className: classNames(sty.slotTargetSlot7)
                    })}
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___2Gxcf
                      )}
                    >
                      {"days"}
                    </div>
                  </p.Stack>
                </div>
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__gv9SM)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__pQtxi
              )}
            >
              {"Referral Bonus"}
            </div>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__elsoK)}>
                <div className={classNames(projectcss.all, sty.freeBox__sy4Kx)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__mdBeS)}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: "5%",
                      value: args.slot5,
                      className: classNames(sty.slotTargetSlot5)
                    })}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </p.Stack>
      ) : null}
      <div className={classNames(projectcss.all, sty.freeBox__kQe3M)}>
        {p.renderPlasmicSlot({
          defaultContents: "Daily Withdrawal",
          value: args.slot,
          className: classNames(sty.slotTargetSlot)
        })}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__mosE1)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <Button
              className={classNames("__wab_instance", sty.button__bSy3A)}
              color={"teal" as const}
            >
              {"Invest Now"}
            </Button>
          ),
          value: args.slot4
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlan__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlan__VariantsArgs;
    args?: PlasmicPlan__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlan__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPlan__ArgsType,
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
          internalArgPropNames: PlasmicPlan__ArgProps,
          internalVariantPropNames: PlasmicPlan__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPlan__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlan";
  } else {
    func.displayName = `PlasmicPlan.${nodeName}`;
  }
  return func;
}

export const PlasmicPlan = Object.assign(
  // Top-level PlasmicPlan renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPlan
    internalVariantProps: PlasmicPlan__VariantProps,
    internalArgProps: PlasmicPlan__ArgProps
  }
);

export default PlasmicPlan;
/* prettier-ignore-end */
