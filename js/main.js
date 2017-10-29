$(() => {
  let rikei = [];
  let bunkei = [];

  let bunkeiAffiliation = ["文化", "社会", "学際"];
  for (let d of data) {
    if (bunkeiAffiliation.some(x => d.affiliation.includes(x))) {
      bunkei.push(d);
    } else {
      rikei.push(d);
    }
  }

  let template = $('#template').html();
  Mustache.parse(template);
  let renderedRikei = Mustache.render(template, {talks: rikei, header: "理工系講演"});
  let renderedBunkei = Mustache.render(template, {talks: bunkei, header: "人文系講演"});
  $('.article-headline').html(renderedRikei + renderedBunkei);
});
