1) cd packages/trn
2) yarn intl:extract-all
3) see the error `Error: Error processing file ../web-main/packages/web/src/@types/logger.d.ts`

After removal of the `logger.d.ts` file all messages from both packages are extracted correctly
