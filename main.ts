import arg from "arg";
``
export const main = async (processArgs: string[]) => {
    const args = arg(
        {
            "--dry-run": Boolean,
        },
        {
            argv: processArgs.slice(0)
        }
    );
    console.log("determined output: " + args["--dry-run"]);
    return {
        dryRun: args["--dry-run"]
    }
};

main(process.argv).then(() => console.log("Script complete"));