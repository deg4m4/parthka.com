import ProjectLayout from "../projectLayout";
import { casm } from "@/.velite";

export const metadata = {
    title: "casm",
    description: "x86_64 / amd64 Instruction Set Architecture Assembler, casm is my hobby / experimental project, casm is three binary format support Raw Binary, Bootloader, and ELF64.",
};

export default function CasmProject() {
    return (
        <ProjectLayout
            title="casm"
            description="x86_64 / amd64 Instruction Set Architecture Assembler, casm is my hobby / experimental project, casm is three binary format support Raw Binary, Bootloader, and ELF64."
            tags={["GoLang"]}
            mdx={casm[0].body}
        />
    )
}
