"use client";
import { noto_sans } from "./fonts";
import HttpClient from "./network/http";
import AuthService from "./service/auth";
import TokenStorage from "./db/token";
import Socket from "./service/socket";
import TweetService from "./service/tweets";
import { SvgSprites } from "@/svg/svg_sprites";
import { TweetServiceProvider } from "./context/tweet_context";
import { AuthErrorEventBus, AuthProvider } from "./context/auth_context";
import StyledComponentsRegistry from "@/styles/registry";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const tokenStorage = new TokenStorage();
const authErrorEventBus = new AuthErrorEventBus();
const httpClient = new HttpClient(baseURL, authErrorEventBus);
const authService = new AuthService(httpClient, tokenStorage);
export const socketIO = new Socket(baseURL, () => tokenStorage.getToken());
const tweetService = new TweetService(httpClient, tokenStorage, socketIO);

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no" className={`${noto_sans.variable}`}>
      <body>
        <SvgSprites />
        <StyledComponentsRegistry>
          <AuthProvider
            authService={authService}
            authErrorEventBus={authErrorEventBus}
          >
            <TweetServiceProvider tweetService={tweetService}>
              {children}
            </TweetServiceProvider>
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
