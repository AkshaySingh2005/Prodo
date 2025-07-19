import { Bell, Settings, Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ModeToggle from "@/components/components/mode_toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

const HeaderMain = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between pl-2 pr-5 w-full">
        {/* Left Section: Sidebar Trigger & Title */}
        <div className="flex items-center gap-4 min-w-fit">
          <SidebarTrigger />
          <div className="hidden md:flex items-center">
            <h1 className="text-[1.4rem] font-semibold text-foreground">
              Dashboard
            </h1>
          </div>
        </div>

        {/* Right Section: Actions & User */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="default"
            className="gap-2 hidden sm:flex h-10"
          >
            <Plus className="h-4 w-4" />
            <span className="hidden lg:inline">New</span>
          </Button>

          {/* Mobile New Button */}
          <Button variant="outline" size="icon" className="sm:hidden h-10 w-10">
            <Plus className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Filter className="h-4 w-4" />
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative h-10 w-10"
              >
                <Bell className="h-4 w-4" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center"
                >
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 max-w-[90vw]">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-sm font-medium">New task assigned</p>
                  <p className="text-xs text-muted-foreground">
                    Warehouse Automation project
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-sm font-medium">
                    Project deadline approaching
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Medico AI - Due in 2 days
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-sm font-medium">Team member joined</p>
                  <p className="text-xs text-muted-foreground">
                    John Doe joined your team
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center text-muted-foreground">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Settings */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex h-10 w-10"
          >
            <Settings className="h-4 w-4" />
          </Button>

          {/* Theme Toggle */}
          <div className="flex items-center">
            <ModeToggle />
          </div>

          {/* User Avatar */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full"
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/shadcn.jpg" alt="User" />
                  <AvatarFallback className="text-sm font-medium">
                    SC
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">shadcn</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    m@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <span>Team</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
