import Link from "next/link";
import React from "react";
import css from "styles/footer.module.scss";

const LayoutFooter = () => {
  return (
    <footer className={css.container}>
      <div className={css.content}>
        <Item title={"Jurídico"} linkArray={linkArray.legal} />
      </div>
    </footer>
  );
};
export default LayoutFooter;

const linkArray = {
  home: [
    {
      href: "/",
      linkTitle: "Home",
    },
    {
      href: "/",
      linkTitle: "Pricing",
    },
    {
      href: "/",
      linkTitle: "Developers",
    },
    {
      href: "/",
      linkTitle: "Contact Us",
    },
  ],
  social: [
    {
      href: "/",
      linkTitle: "Twitter",
    },

    {
      href: "/",
      linkTitle: "Intagram",
    },
    {
      href: "/",
      linkTitle: "Facebook",
    },
    {
      href: "/",
      linkTitle: "Youtube",
    },
  ],
  legal: [
    {
      href: "/",
      linkTitle: "Política de Privacidade",
    },
    {
      href: "/",
      linkTitle: "Termos e Condições",
    },
  ],
  features: [
    {
      href: "/",
      linkTitle: "Live Converter",
    },
    {
      href: "/",
      linkTitle: "Live Exchange Rate",
    },
    {
      href: "/",
      linkTitle: "Currency Comparison",
    },
    {
      href: "/",
      linkTitle: "Live Currency Graph ",
    },
  ],
};

interface FooterItemProps {
  title: string;
  linkArray: {
    href: string;
    linkTitle: string;
  }[];
}

const Item = (props: FooterItemProps) => {
  const { linkArray, title } = props;
  return (
    <div className={css.items}>
      <h1>{title}</h1>
      <div className={css.list}>
        {linkArray.map((l, i) => (
          <Link key={i} href={l.href}>
            {l.linkTitle}
          </Link>
        ))}
      </div>
    </div>
  );
};
