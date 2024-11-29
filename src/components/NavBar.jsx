import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="h-16 flex items-center space-x-10">
            <Link href="/home" legacyBehavior passHref>
              <NavigationMenuLink
                className={`bg-cyan-950 hover:bg-cyan-900 focus:bg-cyan-700 ${navigationMenuTriggerStyle()}`}
              >
                Home
              </NavigationMenuLink>
            </Link>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink
                className={`bg-cyan-950 hover:bg-cyan-900 focus:bg-cyan-700 ${navigationMenuTriggerStyle()}`}
              >
                About
              </NavigationMenuLink>
            </Link>
            <Link href="/products" legacyBehavior passHref>
              <NavigationMenuLink
                className={`bg-cyan-950 hover:bg-cyan-900 focus:bg-cyan-700 ${navigationMenuTriggerStyle()}`}
              >
                Products
              </NavigationMenuLink>
            </Link>
            <Link href="/blog/1" legacyBehavior passHref>
              <NavigationMenuLink
                className={`bg-cyan-950 hover:bg-cyan-900 focus:bg-cyan-700 ${navigationMenuTriggerStyle()}`}
              >
                Blog 1
              </NavigationMenuLink>
            </Link>
            <Link href="/blog/100" legacyBehavior passHref>
              <NavigationMenuLink
                className={`bg-cyan-950 hover:bg-cyan-900 focus:bg-cyan-700 ${navigationMenuTriggerStyle()}`}
              >
                Blog 100
              </NavigationMenuLink>
            </Link>
            <Link href="/register" legacyBehavior passHref>
              <NavigationMenuLink
                className={`bg-cyan-950 hover:bg-cyan-900 focus:bg-cyan-700 ${navigationMenuTriggerStyle()}`}
              >
                Register
              </NavigationMenuLink>
            </Link>
            <Link href="/login" legacyBehavior passHref>
              <NavigationMenuLink
                className={`bg-cyan-950 hover:bg-cyan-900 focus:bg-cyan-700 ${navigationMenuTriggerStyle()}`}
              >
                Login
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* <nav className="w-full h-12">
        <ul className="w-full h-full bg-cyan-950 flex space-x-20 justify-center items-center underline text-gray-300">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog/1">Blog 1</Link>
          </li>
          <li>
            <Link href="/blog/100">Blog 100</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav> */}
    </>
  );
}
