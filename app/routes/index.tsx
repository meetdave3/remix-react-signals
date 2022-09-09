import { Count } from "~/components/count";
import { DecrementButton } from "~/components/decrement";
import { IncrementButton } from "~/components/increment";
import { countState } from "~/lib/counter-state";

const state = countState()

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>


      <Count count={state.count} />
      <IncrementButton fn={state.increment}  />
      <DecrementButton fn={state.decrement} />

    </div>
  );
}
