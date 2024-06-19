import { MotionConfig, motion } from "framer-motion";

const Testimonial = ({ imgSrc, name, title, company, content }) => (
  <MotionConfig
    transition={{
      duration: 0.2,
      ease: "easeInOut",
    }}
  >
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: -8,
      }}
      exit={{
        y: 0,
      }}
      className="w-full overflow-hidden rounded-lg border-2 border-zinc-900 bg-white p-8 md:p-12"
    >
      <div className="mb-6 flex items-center gap-6">
        <div className="rounded-lg bg-zinc-900">
          <motion.img
            initial={{
              rotate: "0deg",
              opacity: 0,
            }}
            animate={{
              rotate: "3deg",
              opacity: 1,
            }}
            exit={{
              rotate: "0deg",
              opacity: 0,
            }}
            src={imgSrc}
            alt="avatar"
            className="size-24 rounded-lg border-2 border-zinc-900 bg-sky-200"
          />
        </div>
        <motion.div
          initial={{
            y: 12,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -12,
            opacity: 0,
          }}
        >
          <span className="mb-1.5 block text-3xl font-medium">{name}</span>
          <span className="text-zinc-600">
            {title} – <span className="text-sky-600">{company}</span>
          </span>
        </motion.div>
      </div>
      <motion.div
        initial={{
          y: 12,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -12,
          opacity: 0,
        }}
        className="text-xl leading-relaxed"
      >
        {content}
      </motion.div>
    </motion.div>
  </MotionConfig>
);

export const OPTIONS = [
  {
    title: "Markas",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Jeff"
        name="Markas Landing Page"
        title="NextJS"
        company="Hackathon competition"
        content=<>
          <a
            className="text-blue-500"
            href="https://hackathon-markas.vercel.app/"
            target="_blank"
            rel="nofollow"
          >
            Web Live!
          </a>{" "}
          |{" "}
          <a
            className="text-blue-500"
            target="_blank"
            rel="nofollow"
            href="https://github.com/rizqipratamar/hackathon-markas"
          >
            Repository
          </a>
          <hr />
          1st place on hackathon competition 3days development with intregation
          on google calendar by booking room. get schedule - book room - marks
          on google calendar.
        </>
      />
    ),
  },
  {
    title: "face-api.js",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Dan"
        name="KYC Liveness Detection"
        title="Client side"
        company="face-api.js"
        content=<>
          <a
            className="text-blue-500"
            href="https://face-api-client-kyc.vercel.app"
            target="_blank"
            rel="nofollow"
          >
            Web Live!
          </a>{" "}
          |{" "}
          <a
            className="text-blue-500"
            href="https://github.com/rizqipratamar/face-api-client-kyc"
            target="_blank"
            rel="nofollow"
          >
            Repository
          </a>{" "}
          |{" "}
          <a
            className="text-blue-500"
            href="https://www.linkedin.com/pulse/exploring-kyc-client-side-ai-proof-of-concept-rizqi-ramadhani-ahbyc/"
          >
            Article
          </a>
          <hr />
          Build a KYC solution on clientside webview to reduce and efficience
          apps bundlesize. with feature liveness detection blink and other
          action with face-api and NEXT.js .
        </>
      />
    ),
  },
  {
    title: "Tensorflow",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Carey"
        name="KYC with Tensorflow"
        title="Client side"
        company="tensorflow facemash"
        content=<>
          <a
            className="text-blue-500"
            href="https://tsf-client-liveness-kyc.vercel.app"
            target="_blank"
            rel="nofollow"
          >
            Web Live!
          </a>{" "}
          |{" "}
          <a
            className="text-blue-500"
            href="https://github.com/rizqipratamar/tsf-client-liveness-kyc"
            target="_blank"
            rel="nofollow"
          >
            Repository
          </a>{" "}
          |{" "}
          <a
            className="text-blue-500"
            href="https://www.linkedin.com/pulse/bringing-kyc-life-exploring-client-side-liveness-model-ramadhani-5lfsc/"
          >
            Article
          </a>
          <hr />
          Build a KYC solution on clientside webview to reduce and efficience
          apps bundlesize. with feature liveness detection blink and other
          action with tensorflow facemash and NEXT.js .
        </>
      />
    ),
  },
  {
    title: "Web Trading",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Dani"
        name="Web Invest Ajaib"
        title="Ajaib"
        company="ReactJS"
        content=<>
          <a
            className="text-blue-500"
            href="https://invest.ajaib.co.id/"
            target="_blank"
            rel="nofollow"
          >
            Web Live!
          </a>{" "}
          <hr />
          Contribute for building web apps with monorepo reactjs for spliting
          coin and stock. Deliver with high quailty of code unit test and
          monitoring
        </>
      />
    ),
  },
  {
    title: "Web Game",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Rizqi"
        name="Match Card Game"
        title="Pokemon"
        company="Web Game"
        content=<>
          <a
            className="text-blue-500"
            href="https://pokemon-memory-match-game.vercel.app/"
            target="_blank"
            rel="nofollow"
          >
            Web Live!
          </a>
          {" | "}
          <a
            className="text-blue-500"
            href="https://github.com/skipfortoday/pokemon-memory-match-game"
            target="_blank"
            rel="nofollow"
          >
            Repository
          </a>
          {" | "}
          <a
            className="text-blue-500"
            href="https://medium.com/@RizqiPratamaR/membuat-web-game-sederhana-dengan-next-js-pokemon-api-67702a83c567"
            target="_blank"
            rel="nofollow"
          >
            Article
          </a>{" "}
          <hr />
          Contribute for building web apps with monorepo reactjs for spliting
          coin and stock. Deliver with high quailty of code unit test and
          monitoring
        </>
      />
    ),
  },
  {
    title: "Micro Frontend",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Phil"
        name="Micro Frontend"
        title="Ajaib"
        company="Split each BU apps to micro apps"
        content="Contribrute to handle micro frontend implementation on internal tools each business unit with proxy forwarding but with single source  auth"
      />
    ),
  },
  {
    title: "POS",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Stetson"
        name="POS Web & Native Apps"
        title="POS"
        company="React & React Native"
        content="Contribute to maintin and creating POS Sytem, report, transaction, connect with 3rd party payment gatway etc."
      />
    ),
  },
  {
    title: "HRIS",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Patty"
        name="Attandance Management"
        title="HRIS Lviors"
        company="Express React Flutter"
        content=<>
          <a
            className="text-blue-500"
            href="https://play.google.com/store/apps/details?id=com.lviors.attendance"
            target="_blank"
            rel="nofollow"
          >
            Playstore
          </a>
          {" | "}
          <a
            className="text-blue-500"
            href="https://apps.apple.com/id/app/lviors-attendance/id1573204575?l=id"
            target="_blank"
            rel="nofollow"
          >
            AppsStore
          </a>
          <hr />
          Build a restful api for hris system, admin dashboard creating reports
          and dekstop web admin panel.
        </>
      />
    ),
  },
  {
    title: "CRM",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Kert"
        name="Member Apps"
        title="Lviors"
        company="CRM - SQL Server Intregation"
        content="Create a intregation between database on SQL server, maintin member apps for tracking pacient treatment progeress."
      />
    ),
  },
  {
    title: "WEB3",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Mark"
        name="Web3 Login Auth"
        title="Web3"
        company="Login auth web3"
        content=<>
          <a
            className="text-blue-500"
            href="https://pokemon-memory-match-game.vercel.app/"
            target="_blank"
            rel="nofollow"
          >
            Web Live!
          </a>
          {" | "}
          <a
            className="text-blue-500"
            href="https://github.com/skipfortoday/pokemon-memory-match-game"
            target="_blank"
            rel="nofollow"
          >
            Repository
          </a>
          {" | "}
          <a
            className="text-blue-500"
            href="https://medium.com/@RizqiPratamaR/membuat-login-web3-ke-wallet-blockchain-dengan-next-js-6b5405364982"
            target="_blank"
            rel="nofollow"
          >
            Article
          </a>
          <hr />
          Create a login web3 apps / dapps to auth with wallets id.
        </>
      />
    ),
  },
  {
    title: "Dekstop",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Joe"
        name="Initial Setup Dekstop Apps"
        title="Javascript"
        company="Electron Nextjs"
        content=<>
          <a
            className="text-blue-500"
            href="https://medium.com/@RizqiPratamaR/membuat-aplikasi-dekstop-lintas-platform-next-js-electron-tailwindcss-dengan-mudah-bb6ba5dde98b"
            target="_blank"
            rel="nofollow"
          >
            Article
          </a>
          <hr />
          Setup dekstop apps with electron and NEXT.js .
        </>
      />
    ),
  },
];
