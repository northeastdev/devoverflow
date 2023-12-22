"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LeftSidebar() {
  const pathname = usePathname();
  return (
    <TooltipProvider>
      <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 max-sm:hidden lg:w-[266px] dark:shadow-none">
        <div className="flex flex-1 flex-col gap-6">
          {sidebarLinks.map((link) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;

            return (
              <Tooltip key={link.route}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.route}
                    className={`${cn(
                      isActive
                        ? "primary-gradient rounded-lg text-light-900"
                        : "text-dark300_light900"
                    )} flex items-center justify-start gap-4 bg-transparent p-3.5`}
                  >
                    <Image
                      src={link.imgURL}
                      alt={link.label}
                      width={20}
                      height={20}
                      className={cn(isActive ? "" : "invert-colors")}
                    />
                    <p
                      className={
                        (cn(isActive ? "base-bold" : "base-medium"),
                        "max-lg:hidden")
                      }
                    >
                      {link.label}
                    </p>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  className="primary-text-gradient border-none shadow-none lg:hidden"
                  side="right"
                >
                  {link.label}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        <SignedOut>
          <div className="flex flex-col gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <Image
                      src="/assets/icons/account.svg"
                      alt="login"
                      width={20}
                      height={20}
                      className="invert-colors lg:hidden"
                    />

                    <span className="primary-text-gradient max-lg:hidden">
                      Log In
                    </span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="primary-text-gradient border-none shadow-none lg:hidden"
                side="right"
              >
                <span>Log In</span>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/sign-up">
                  <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <Image
                      src="/assets/icons/sign-up.svg"
                      alt="sign up"
                      width={20}
                      height={20}
                      className="invert-colors lg:hidden"
                    />

                    <span className="max-lg:hidden">Sign Up</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="primary-text-gradient border-none shadow-none lg:hidden"
                side="right"
              >
                <span>Sign Up</span>
              </TooltipContent>
            </Tooltip>
          </div>
        </SignedOut>
      </section>
    </TooltipProvider>
  );
}
