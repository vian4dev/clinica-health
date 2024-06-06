interface PropsBannerInfo {
  title: string
  titleButton: string
  link: string
}

export function BannerInfo(props: PropsBannerInfo) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-pink-50 px-4 py-5 dark:bg-zinc-800">
      <div className="flex flex-col">
        <h1 className="text-zinc-400">{props.title}</h1>
      </div>

      <div className="h-1 rounded-full bg-pink-400"></div>

      <div className="flex gap-3">
        <button
          type="button"
          className="text-sm font-medium text-pink-500 hover:text-pink-300"
        >
          <a href={props.link}>{props.titleButton}</a>
        </button>
      </div>
    </div>
  )
}
