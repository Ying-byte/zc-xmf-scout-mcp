#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "xmf",
  boardId: "xmf-official",
  domain: "xmf.com",
  npmName: "zc-xmf-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
