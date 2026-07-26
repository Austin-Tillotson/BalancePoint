"use client";

import { useState } from "react";
import Image from "next/image";
import { NavMenu } from "./NavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFileExport, faXmark } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="rounded-lg border border-slate-200 bg-white p-4 lg:hidden">
      <div className="grid gap-4 grid-cols-[1fr_auto] items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/balancepoint-mark.svg"
            alt="BalancePoint"
            width={36}
            height={36}
          />

          <div>
            <p className="text-sm text-slate-500">Financial Dashboard</p>
            <h1 className="text-2xl font-semibold text-violet-700">
              BalancePoint
            </h1>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            className="flex w-9 items-center justify-center lg:hidden"
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <FontAwesomeIcon
              className="text-lg text-slate-600 hover:text-violet-700"
              icon={isMenuOpen ? faXmark : faBars}
            />
          </button>

          <button
            className="flex h-9 w-9 items-center justify-center"
            type="button"
            aria-label="Export report"
          >
            <FontAwesomeIcon
              className="text-lg text-slate-600 hover:text-violet-700"
              icon={faFileExport}
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="mt-4 lg:hidden" aria-label="Mobile dashboard navigation">
          <NavMenu direction="column" />
        </nav>
      )}
    </header>
  );
}