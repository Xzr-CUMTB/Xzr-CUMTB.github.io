import { Link } from "react-router";
import { type Collection, collectionStyle } from "../data/collections";
import { archiveEntries } from "../data/archiveEntries";
import { livehouse } from "../data/livehouse";
import { AssetImage } from "./AssetImage";
import { Icon } from "./Icon";

export function AlbumCard({ collection: c }: { collection: Collection }) {
  const count = archiveEntries[c.id].length;
  return (
    <article
      className={`album-card collection-album collection-album--${c.character}`}
      style={collectionStyle(c)}
    >
      <Link
        className="album-artwork"
        to={`/${c.id}`}
        aria-label={`进入${c.title}`}
      >
        <div className="album-poster-back">
          <AssetImage src={livehouse.posters[c.character]} />
        </div>
        <div className="vinyl-record">
          <span>
            XZ<small>SIDE {c.number}</small>
          </span>
        </div>
        <div className="album-sleeve">
          <div className="sleeve-header">
            <span>XZ / PERSONAL COLLECTION</span>
            <span>VOL. {c.number}</span>
          </div>
          <div className="collection-cover" aria-hidden="true">
            <span className="cover-catalog">
              THE LIVEHOUSE ARCHIVES / {c.number}
            </span>
            <strong className="cover-type">
              {c.coverLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </strong>
            <span className="cover-orbit" />
            <AssetImage
              className="cover-character"
              src={livehouse.stage[c.character]}
            />
            <AssetImage
              className="cover-instrument"
              src={livehouse.icons[c.character]}
            />
            <span className="cover-bottomline">
              XU ZIRUI · AN ONGOING COLLECTION
            </span>
          </div>
          <div className="sleeve-title">
            <strong>{c.title}</strong>
            <small>{c.english}</small>
          </div>
          <span className="sleeve-sticker">
            OPEN
            <br />
            VOL. {c.number} ↗
          </span>
        </div>
      </Link>
      <div className="album-info">
        <div className="album-index">
          <span>{c.number}</span>
          <small>ARCHIVE</small>
        </div>
        <div>
          <p className="album-status">
            {String(count).padStart(2, "0")} 条记录 · 持续收录
          </p>
          <h3>
            <Link to={`/${c.id}`}>
              {c.title}
              <Icon size={19} />
            </Link>
          </h3>
          <p className="album-story">{c.description}</p>
          <Link className="album-explore" to={`/${c.id}`}>
            打开这张唱片 <Icon size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
