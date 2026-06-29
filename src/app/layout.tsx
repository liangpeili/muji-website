import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "牧机私域 AI 系统 | 可控的微信 AI 分身",
  description:
    "牧机私域 AI 系统帮助销售、客服和运营团队统一管理微信客户沟通、自动回复、朋友圈触达、群聊线索和跟进任务。",
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
