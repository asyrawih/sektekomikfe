import { Navbar, Switch, useTheme, Text, Link } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import dynamic from "next/dynamic";
import { AcmeLogo } from "../../icons/logo";

export const NavbarComp = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const menu: string[] = ["Daftar Komik", "Project", "Bookmark", "Apps"];
  return (
    <Navbar isBordered={isDark} variant="sticky">
      <Navbar.Brand>
        <Navbar.Toggle showIn={"xs"} aria-label="toggle navigation" />
        <AcmeLogo />
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn={"xs"}>
        {menu.map((item) => (
          <Navbar.Link aria-sort="ascending" key={item.toUpperCase()} href="/">
            {item}
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Collapse>
        {menu.map((item) => (
          <Navbar.CollapseItem aria-sort="ascending" key={item.toUpperCase()}>
            <Link
              css={{
                maxWidth: "100%",
                color: "inherit",
              }}
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      <Navbar.Content>
        <Text b>{type.toUpperCase()}</Text>
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
      </Navbar.Content>
    </Navbar>
  );
};

export default dynamic(() => Promise.resolve(NavbarComp), { ssr: false });
