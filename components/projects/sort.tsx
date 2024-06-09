"use client";

import { TActionsDropdown, TActionsDropdownItem, TActionsItem, TActionsItemWrapper } from "@/styles/projects/sort";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

export interface TFilterOptions {
    label: string;
    slug: string;
    selected: string | number;
    options: {
      [label: string | number]: string | number
    }
  }

export default function Sort(
    {
    menuOptions,
  }: {
    menuOptions?: TFilterOptions[]
  }) {
    const pathname = usePathname()

    //TODO:pagination params 
    //TODO:query params and searchParams
    const [activeDropdownMenu, setActiveDropdownMenu] = useState<string>("")

    const handleDropdownMenu = (slug: string) => {
        if (activeDropdownMenu == slug) {
            setActiveDropdownMenu("");
        } else {
            setActiveDropdownMenu(slug)
        }
    }

    useEffect(() => {
        setActiveDropdownMenu("")
    }, [
        // searchParams
    ])

    const dropdownMenuItemsRef = useRef<{
        [key: string]: HTMLDivElement;
    }>({});

    useEffect(() => {
        const handleClick = (event: Event) => {
            if (
                activeDropdownMenu != "" &&
                dropdownMenuItemsRef.current[activeDropdownMenu] &&
                event.target instanceof Node &&
                !dropdownMenuItemsRef.current[activeDropdownMenu].contains(event.target)
            ) {
                setActiveDropdownMenu("")
            }
        }

        document.addEventListener("click", handleClick)
        document.addEventListener("touchend", handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
            document.removeEventListener("touchend", handleClick)
        }
    }, [activeDropdownMenu, dropdownMenuItemsRef])

    return (
        <div className="flex gap-6 justify-end">
            {/* {menuOptions.map((item) => (
                <TActionsItemWrapper
                    key={item.slug}
                    ref={(e) => {
                        if (e) dropdownMenuItemsRef.current[item.slug] = e;
                    }}
                >
                    <TActionsItem
                        onClick={() => handleDropdownMenu(item.slug)}
                        $active={activeDropdownMenu == item.slug}
                    >
                        <p className="w-fit">
                            {`${item.label} `}
                        </p>
                        <HiOutlineChevronDown />
                    </TActionsItem>
                    {activeDropdownMenu == item.slug && (
                        <TActionsDropdown>
                            {Object.keys(item.options).map((option) => (
                                <TActionsDropdownItem
                                    key={option}
                                    href={{
                                        pathname: pathname,
                                        query: {
                                            // ...queryParams,
                                            [item.slug]: option,
                                        }
                                    }}
                                >
                                    {item.options[option]}
                                </TActionsDropdownItem>
                            ))}
                        </TActionsDropdown>
                    )}
                </TActionsItemWrapper>
            ))} */}
        </div>
    )
}