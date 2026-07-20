import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

export default (() => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div class="cbk-footer-credit">
          <img src="/conjuring-the-body/assets/cbk_logo.png" alt="CBK Rotterdam" />
          <p>Made possible with a financial contribution from CBK Rotterdam.</p>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor