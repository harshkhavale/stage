import { ModeToggle } from "@/components/global/mode-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import { stripe } from "@/lib/stripe";
import { UserButton } from "@clerk/nextjs";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { User } from "@clerk/nextjs/server";

export default async function Home() {
  const prices = await stripe.prices.list({
    product: process.env.NEXT_PLURA_PRODUCT_ID,
    active: true,
  });

  return (
    <div>
      <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
        <aside className="flex items-center gap-2">
          <div className=" flex justify-center items-center">
            <Image
              src={"/cube.png"}
              alt="logo"
              className="h-10 w-10"
              width={80}
              height={80}
            />
            <div className=" flex flex-col">
              <p className="font-bold text-3xl -mb-1">
                {process.env.NEXT_APP_NAME}
              </p>
              <p className="font-bold happy-font text-[8px]">
                a platform for everyone
              </p>
            </div>
          </div>
        </aside>
        <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <ul className="flex items-center justify-center gap-8">
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Documentation</Link>
            <Link href={"#"}>Features</Link>
          </ul>
        </nav>
        <aside className="flex gap-2 items-center">
          <Link
            href={"/agency"}
            className="bg-primary rounded-3xl text-white p-2 px-4 hover:bg-primary/80"
          >
            {!User ? "login" : "dashboard"}
          </Link>
          <UserButton />
          <ModeToggle />
        </aside>
      </div>
      <section className="relative flex items-center justify-center flex-col ">
        {/* grid */}
        {/* <div className="absolute bottom-0 left-0 right-0 -top-1 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:8rem_8rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" /> */}
        <div className="flex flex-col-reverse md:flex-row md:h-[100vh] overflow-hidden md:p-8 p-2 mt-12 items-center ">
          <div className="headlines">
            <p className="text-start text-5xl md:text-9xl font-bold">
              Power Up Your Agency—All in One Place!{" "}
            </p>{" "}
            <p className=" text-gray-700  my-8     rounded-3xl dark:text-gray-400">
              Empower your agency with an all-in-one platform for website
              creation, management, and development. Streamline workflows,
              create stunning websites, and collaborate seamlessly—all in one
              place.
            </p>
            <button className="bg-teal-500 md:p-4 p-2 happy-font font-bold rounded-3xl text-white">
              <Link
                className=" text-xs md:text-base"
                href={"https://fast-magpie-32.accounts.dev/sign-in"}
              >
                Lets get started -{">"}
              </Link>
            </button>
          </div>
          <div className="banner">
            <Image
              src={"/smilingboy.png"}
              className=" w-full object-contain"
              alt="boy"
              width={1080}
              height={1080}
            />
          </div>
        </div>{" "}
        <div className="bg-gradient-to-r   from-primary to-teal-400 text-transparent bg-clip-text relative">
          <h1 className="text-5xl font-bold text-center md:text-[300px]">
            {process.env.NEXT_APP_NAME}
          </h1>
        </div>
        <div className="flex justify-center items-center relative">
          <Image
            src={"/assets/preview.png"}
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 ">
        <h2 className="text-4xl text-center"> Choose what fits you right</h2>
        <p className="text-muted-foreground text-center">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not <br />
          ready to commit you can get started for free.
        </p>
        <div className="flex  justify-center gap-4 flex-wrap mt-6">
          {prices.data.map((card) => (
            //WIP: Wire up free product from stripe
            <Card
              key={card.nickname}
              className={clsx("w-[300px] flex flex-col justify-between", {
                "border-2 border-primary": card.nickname === "Unlimited Saas",
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx("", {
                    "text-muted-foreground": card.nickname !== "Unlimited Saas",
                  })}
                >
                  {card.nickname}
                </CardTitle>
                <CardDescription>
                  {
                    pricingCards.find((c) => c.title === card.nickname)
                      ?.description
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">
                  {card.unit_amount && card.unit_amount / 100}
                </span>
                <span className="text-muted-foreground">
                  <span>/ {card.recurring?.interval}</span>
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {pricingCards
                    .find((c) => c.title === card.nickname)
                    ?.features.map((feature) => (
                      <div key={feature} className="flex gap-2">
                        <Check />
                        <p>{feature}</p>
                      </div>
                    ))}
                </div>
                <Link
                  href={`/agency?plan=${card.id}`}
                  className={clsx(
                    "w-full text-center bg-primary p-2 rounded-md",
                    {
                      "!bg-muted-foreground":
                        card.nickname !== "Unlimited Saas",
                    }
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
          <Card className={clsx("w-[300px] flex flex-col justify-between")}>
            <CardHeader>
              <CardTitle
                className={clsx({
                  "text-muted-foreground": true,
                })}
              >
                {pricingCards[0].title}
              </CardTitle>
              <CardDescription>{pricingCards[0].description}</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">0</span>
              <span>/ month</span>
            </CardContent>
            <CardFooter className="flex flex-col  items-start gap-4 ">
              <div>
                {pricingCards
                  .find((c) => c.title === "Starter")
                  ?.features.map((feature) => (
                    <div key={feature} className="flex gap-2">
                      <Check />
                      <p>{feature}</p>
                    </div>
                  ))}
              </div>
              <Link
                href="/agency"
                className={clsx(
                  "w-full text-center bg-primary p-2 rounded-md",
                  {
                    "!bg-muted-foreground": true,
                  }
                )}
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
