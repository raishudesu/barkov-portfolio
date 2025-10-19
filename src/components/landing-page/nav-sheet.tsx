"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { ModeToggle } from "./mode-toggle";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";
import { routes } from "./data";

const NavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="rounded-full">
        <Button variant={"outline"} size={"lg"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-transparent backdrop-blur-md border-l border-muted-foreground">
        <SheetHeader className="text-center">
          <SheetTitle className="space-mono-regular">barkov</SheetTitle>
          <SheetDescription>Navigate</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          {routes.map(({ to, name }, index) => (
            <Button
              key={index}
              variant={"link"}
              className="rounded-md  font-medium py-4 flex gap-2 items-center justify-center cursor-pointer "
              asChild
            >
              <Link
                activeClass="active"
                to={to}
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                offset={-100}
              >
                {name}
              </Link>
            </Button>
          ))}
        </div>
        <SheetFooter>{/* <ModeToggle /> */}</SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
