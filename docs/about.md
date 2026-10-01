# About Open Ink

## Who made it

Open Ink is built and maintained by [Mediusware](https://mediusware.com), a software company that designs and builds products for clients around the world. It is open source under the [MIT License](https://github.com/mediuswareltd/openink/blob/main/LICENSE), and anyone is welcome to use it, fork it and [contribute](https://github.com/mediuswareltd/openink/blob/main/CONTRIBUTING.md).

## Why we made it

Every project starts with a conversation about screens: what's on them, and how a user gets from one to the next. We needed a way to show that early, before anyone opens a design tool, and we kept running into the same problems:

- **Design tools are slow for early ideas.** Laying out a dozen screens by hand takes hours, and every change to the flow means redrawing.
- **Polished mockups get the wrong feedback.** When something looks finished, people comment on fonts, colours and spacing instead of whether the flow makes sense.
- **Static pictures don't show a flow.** Stakeholders understand a product much faster when they can click through it.
- **AI assistants are good at writing structure, but not at drawing.** We wanted a format an assistant could write and a tool could check, so a first draft of a whole app takes minutes.

So we made the wireframe a text file. You describe screens in YAML, Open Ink turns them into a clickable, hand-drawn prototype, and the sketchy look keeps everyone focused on structure. Because it's plain text, it lives in git next to the code, shows up in diffs and pull requests, and is easy to generate and review.

## What it's built on

Open Ink stands on the shoulders of two excellent open-source projects:

- [wired-elements](https://github.com/rough-stuff/wired-elements): hand-drawn web components
- [RoughJS](https://github.com/rough-stuff/rough): the sketchy drawing library behind them

## Get involved

- Report a bug or ask for a feature in [GitHub Issues](https://github.com/mediuswareltd/openink/issues).
- Adding a block is one object in `src/render/blocks/`. See [Extending](/extending).
- Read the [changelog](https://github.com/mediuswareltd/openink/blob/main/CHANGELOG.md) for what's new.
