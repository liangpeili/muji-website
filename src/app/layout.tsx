import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "牧机私域 AI 系统 | 可控的微信 AI 分身",
  description:
    "牧机私域 AI 系统连接主机端、服务端与管理控制台，覆盖微信消息接入、客户画像、自动回复、朋友圈运营、群聊情报与任务跟进。",
  openGraph: {
    title: "牧机私域 AI 系统",
    description: "让每个微信号拥有可控的 AI 分身。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
