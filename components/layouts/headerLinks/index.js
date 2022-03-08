import Link from "next/link"

const HeaderLinks = ({ element }) => {

  const { externalLink, title, path } = element;

  if (externalLink) {
    return (
      <a target="_blank" rel="noreferrer" href={path}>{title}</a>
    )
  } else {
    return (
      <Link href={path}>
        <a>{title}</a>
      </Link>
    )
  }
}

export default HeaderLinks