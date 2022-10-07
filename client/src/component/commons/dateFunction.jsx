export const displayedAt = (time) => {
    const milliSeconds = new Date() - time;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) {
      if (seconds >= 2) return `${Math.floor(seconds)} secs ago`;
      return "Just now";
    }
    const minutes = seconds / 60;
    if (minutes < 60) {
      if (minutes >= 2) return `${Math.floor(minutes)} mins ago`;
      return "1 min ago";
    }
    const hours = minutes / 60;
    if (hours < 24) {
      if (hours >= 2) return `${Math.floor(hours)} hours ago`;
      return "1 hour ago";
    }
    const days = hours / 24;
    if (days < 7) {
      if (days >= 2) return `${Math.floor(days)} days ago`;
      return "yesterday";
    }
    const weeks = days / 7;
    if (weeks < 5) {
      if (weeks >= 2) return `${Math.floor(weeks)} weeks ago`;
      return "1 week ago";
    }
    const months = days / 30;
    if (months < 12) {
      if (months >= 2) return `${Math.floor(months)}months ago`;
      return "1 month ago";
    }
    const years = days / 365;
    if (years >= 2) return `${Math.floor(years)}years ago`;
    else if (Math.floor(years) === 1) return "1 year ago";
  };