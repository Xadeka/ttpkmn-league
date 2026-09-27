import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

export function Discord(props) {
  return <FontAwesomeIcon color="#5865F2" {...props} icon={faDiscord} />;
}

export function Twitter(props) {
  return <FontAwesomeIcon color="#1da1f2" {...props} icon={faTwitter} />;
}
