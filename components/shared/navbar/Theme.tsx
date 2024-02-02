"use client";

import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import React from "react";
import { themes } from "@/constants";

const Theme = () => {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="Sun"
              width={20}
              height={20}
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="Moon"
              width={20}
              height={20}
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] bg-light-900 rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((t) => (
            <MenubarItem
              key={t.value}
              className="flex items-center gap-4 px-2.5 py-2 focus:bg-light-800 dark:focus:bg-dark-400 cursor-pointer"
              onClick={() => {
                setMode(t.value);
                if (t.value !== "system") {
                  localStorage.theme = t.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image
                src={t.icon}
                alt={t.label}
                width={16}
                height={16}
                className={`${mode === t.value && "active-theme"}`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  mode === t.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}
              >
                {t.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
