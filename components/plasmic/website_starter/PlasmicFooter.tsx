// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3MD3YMHyr4CCDJ57rgVToC
// Component: qIXOvhOr5y

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

import { useScreenVariants as useScreenVariantslsNz11SgVt9 } from "./PlasmicGlobalVariant__Mobile"; // plasmic-import: lsNZ11SGVt9/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_website_starter.module.css"; // plasmic-import: 3MD3YMHyr4CCDJ57rgVToC/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: qIXOvhOr5y/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: CJJCP5BT0l8/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 1KMY4qHZjsV/icon

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultFooterProps {
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

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

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
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__jK8Iv)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          hasGap={true}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column___6BfJe)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__cBi3O)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__g0IaO)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__efNqy
                  )}
                >
                  {"AquaLight Option"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__sxz3T
                  )}
                >
                  {"Invest in Your Future with Confidence"}
                </div>
              </p.Stack>
            </p.Stack>
          </div>
          <div className={classNames(projectcss.all, sty.column__reEoO)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__hHrJv)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vztgi
                )}
              >
                {"main menu"}
              </div>
              <Button
                className={classNames("__wab_instance", sty.button__uWfIw)}
                color={"clear" as const}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__lC7Rt)}
                    role={"img"}
                  />
                }
                link={`/`}
                size={"minimal" as const}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__gl9Sx)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bxlJm
                  )}
                >
                  {"Home"}
                </div>
              </Button>
              <p.PlasmicLink
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(projectcss.all, projectcss.a, sty.link)}
                component={Link}
                href={`/about`}
                platform={"nextjs"}
              >
                <Button
                  color={"clear" as const}
                  endIcon={
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__jiXpS)}
                      role={"img"}
                    />
                  }
                  size={"minimal" as const}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__cspQl)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rs5Sm
                    )}
                  >
                    {"About"}
                  </div>
                </Button>
              </p.PlasmicLink>
            </p.Stack>
          </div>
          <div className={classNames(projectcss.all, sty.column__lZ22J)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__b3L)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zvnB
                )}
              >
                {"Support"}
              </div>
              <Button
                className={classNames("__wab_instance", sty.button__n0Gt5)}
                color={"clear" as const}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg___45ABv)}
                    role={"img"}
                  />
                }
                link={`/contact`}
                size={"minimal" as const}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__eubB6)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ew7SY
                  )}
                >
                  {"Contact"}
                </div>
              </Button>
              <Button
                className={classNames("__wab_instance", sty.button__fSg9I)}
                color={"clear" as const}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__imGuE)}
                    role={"img"}
                  />
                }
                link={`/plans`}
                size={"minimal" as const}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__owtAc)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__f2AVk
                  )}
                >
                  {"Plans"}
                </div>
              </Button>
            </p.Stack>
          </div>
          <div className={classNames(projectcss.all, sty.column___3ZsCr)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__aqz2G)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rbz3Y
                )}
              >
                {"Address"}
              </div>
            </p.Stack>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__yDmIa
              )}
            >
              {"15 Railway Street \nAntrim BT41 4AE UK"}
            </div>
          </div>
        </p.Stack>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__nBacz
          )}
        >
          {"Copyright \u00a9 2023 AquaLight Option."}
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "link"],
  columns: ["columns", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
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
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
