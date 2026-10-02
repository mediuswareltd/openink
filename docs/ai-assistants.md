# Working with AI assistants

Open Ink is designed so that an assistant (Claude Code, Cursor, Copilot, ChatGPT…) can turn a description into a prototype **without writing HTML**:

> "Wireframe a marketplace for used bikes: search with filters, listing page with a contact form, seller dashboard."

The assistant writes `spec.yaml`, the tool checks it, and you get a consistent hand-drawn result. Because the spec is small and validated, it is cheap to iterate: "add a second tab to the listing page" is a five-line diff.

## Install the Open Ink skill

Open Ink comes with a `wireframe` skill that teaches your agent the whole loop. Once it is installed, the agent uses it whenever you ask for a wireframe, mockup or clickable prototype, in any folder, so you do not need to mention Open Ink or run `init` first.

The skill follows the same steps as the `AGENTS.md` below: it reads the block reference, edits only `spec.yaml`, validates until the spec is clean, checks a PNG of every screen and tells you where the result is. In a folder without a spec, it creates the project in a new subfolder so it does not overwrite your files.

### Claude Code

Install the plugin once:

```bash
claude plugin marketplace add mediuswareltd/openink
claude plugin install openink@openink
```

Inside a session the same is `/plugin marketplace add mediuswareltd/openink` and `/plugin install openink@openink`. You can also call the skill directly with `/openink:wireframe`.

For updates, turn on auto-update for the **openink** marketplace in `/plugin` → **Marketplaces**, or run `/plugin marketplace update openink`.

### Cursor, Codex, Gemini CLI, GitHub Copilot and other agents

Add the skill with the [skills](https://skills.sh) CLI:

```bash
npx skills add mediuswareltd/openink
```

It asks which of your agents to install it for, and whether to install it for this project or for your user. To skip the questions, name the agents and add `-y`, for example `npx skills add mediuswareltd/openink -a cursor -a codex -y`, and add `-g` to install it for every project. Run `npx skills update` to get the latest version.

## How it works

`openink init` puts an `AGENTS.md` in your project. Most assistants read it automatically; it tells them to:

1. Run `npx openink blocks` to learn the available blocks.
2. Edit `spec.yaml` only.
3. Run `npx openink validate` and fix what it reports.
4. Run `npx openink png` and look at `dist/png/*.png` to check the layout.

If your assistant uses a different filename (`CLAUDE.md`, `.cursorrules`, …), copy or rename `AGENTS.md`.

## Why validation matters here

Assistants make small mistakes: a misspelt prop, a link to a screen they renamed, a translation missing in one language. `validate` reports each with its exact location in the spec and a "did you mean" hint, so the fix-and-retry loop is short and mechanical:

```
✗ 2 problems in the spec
  error screens[1].blocks[3].type: Unknown block type "buton". Did you mean "button"?
  error screens[0].blocks[0].go: Links to unknown screen "checkout". Did you mean "check-out"?
```

## Tips for good prompts

- Name the **users** and their **goals**, not the widgets: "a tenant who wants to find a flat in Zurich".
- Say which **states** matter (empty, error, paid, unpaid); each becomes a screen or a `note:`.
- Ask for `note:` on anything a sketch can't show ("results update live, there is no search button").
- Mention languages up front if you need them.
