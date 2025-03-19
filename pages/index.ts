import { createPage, el } from "@common-module/static-site-generator";
import getLogo from "./components/getLogo.js";

export default function index() {
  return createPage(
    {
      title: "Virtual Bitcoin",
      description:
        "Virtual Bitcoin is Bitcoin implemented as a EVM smart contract",
      jsFiles: ["/bundle.js"],
      cssFiles: ["/bundle.css"],
      twitterHandle: "@virtual_bitcoin",
    },
    el(
      ".layout",
      el(
        "header",
        el(
          "h1",
          el("a", getLogo(), { href: "/" }),
        ),
      ),
      el(
        ".intro-view",
        el(
          "section.hero",
          { style: { backgroundImage: "url('/images/hero.jpg')" } },
          el(
            "video",
            { autoplay: true, loop: true, muted: true, playsInline: true },
            el("source", {
              src: "/videos/hero.mp4",
              type: "video/mp4",
            }),
          ),
          el(
            ".content",
            el("h1", "King Crown DAO"),
            el(
              "p",
              "킹크라운다오는 Kaia 기반 NFT, KCD Kongz 홀더들이 모인 DAO입니다.",
            ),
          ),
        ),
      ),
    ),
  );
}
