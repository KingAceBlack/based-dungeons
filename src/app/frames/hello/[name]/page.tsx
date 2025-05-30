import { Metadata } from "next";
import App from "~/app/app";

// const appUrl = process.env.NEXT_PUBLIC_URL;
// const appUrl = 'https://9cf4c62f-7bc5-42d6-a3d0-01aeaea50754-00-2obuwftnnc76u.kirk.replit.dev';
const appUrl = 'https://based-dungeons.vercel.app';

interface Props {
  params: Promise<{
    name: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;

  const frame = {
    version: "next",
    imageUrl: `${appUrl}/crossedSwords.png`,
    button: {
      title: "Begin",
      action: {
        type: "launch_frame",
        name: "Base Dungeons",
        url: `${appUrl}`,
        splashImageUrl: `${appUrl}/crossedSwordsLogo.png`,
        splashBackgroundColor: "#EAE3C8",
      },
    },
  };

  return {
    title: `Base Dungeons`,
    description: `Base Dungeons`,
    openGraph: {
      title: `Base Dungeons`,
      description: `Base Dungeons`,
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default async function HelloNameFrame({ params }: Props) {
  const { name } = await params;

  return <App title={`kb test`} />;
}
