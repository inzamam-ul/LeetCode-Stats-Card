// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import html from "./demo.html";
import { font_list } from "../font";
import { theme_list } from "../theme";

export default html
    .replace(
        "${theme_options}",
        theme_list.map((theme, i) => `<option value="${theme}" ${i === 0 ? "selected" : ""}>${theme}</option>`).join(""),
    )
    .replace(
        "${font_options}",
        font_list.map((font, i) => `<option value="${font}" ${i === 0 ? "selected" : ""}>${font}</option>`).join(""),
    );
