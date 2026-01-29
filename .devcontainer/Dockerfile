FROM oven/bun:alpine
RUN apk update && apk add --no-cache git libc6-compat
RUN bun install -g pnpm
WORKDIR /workspaces/EduChronia-web
RUN ln -s /usr/local/bin/bun /usr/local/bin/node
