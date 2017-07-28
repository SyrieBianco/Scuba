
export const totalTime = (dives) => {
  let total = 0;

  dives.map( dive => {
    total += dive.duration_seconds;
  });

  return displayDuration(total);
};

export const avgDiveTime = (dives) => {
  let total = 0;

  dives.map( dive => {
    total += dive.duration_seconds;
  });

  const average = total / dives.length;

  return displayDuration(average);
};


export const avgBreathingRate = (dives) => {
  let total = 0;

  dives.map( dive => {
    total += (dive.air_consumed / (dive.duration_seconds / 60) );
  });

  const average = total / dives.length;

  return Math.floor(average * 100)/100;
};

export const bestBreath = (dives) => {
  let bestRate = 0;
  let bestDive = null;

  dives.forEach( dive => {
    let currentRate = (dive.air_consumed / (dive.duration_seconds / 60));
    if (currentRate < bestRate || bestRate === 0) {
      bestRate = currentRate;
      bestDive = dive;
    }
  });

  bestRate = Math.floor(bestRate * 100) / 100;

  return { bestDive, bestRate };
};



export const displayDuration = (duration) => {
    let hsep = "";
    let msep = "";
    let ssep = "";
    let sec = duration;
    let hours = Math.floor(sec / 3600);
    sec -= hours * 3600;
    let minutes = Math.floor(sec / 60);
    sec -= minutes * 60;
    if (hours < 10) hsep = "0" ;
    if (minutes < 10) msep = "0" ;
    if (sec < 10) ssep = "0" ;

    if (hours === 0) {
      return `${msep}${minutes}m`;
    } else {
      return `${hsep}${hours}h${msep}${minutes}m`;
    }
  };
