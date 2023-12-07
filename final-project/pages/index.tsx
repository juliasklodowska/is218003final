import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import style from '../styles/index.module.css'

export default function IndexPage() {
    return (
        <DefaultLayout>
            <section className={style.heroSection}>
                <h1 className={style.title}>Welcome to Cottage Comfort Café</h1>
                <h4 className={style.subtitle}>Where Every Sip Feels Like Home</h4>
            </section>
        </DefaultLayout>
    );
}
