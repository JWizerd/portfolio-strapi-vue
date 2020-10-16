export const TYPES = {
  education: "education",
  all: "all",
  work: "work",
  client: "client",
  skill: "skill"
};

export const filterBySkills = (skills, list) => {
  if (
    Array.isArray(list) &&
    Array.isArray(skills) &&
    skills.length > 0 &&
    typeof list[0] !== "object" &&
    list[0].skills
  ) {
    const tagged = [];
    skills = skills.map(f => f.id);

    for (const item of list) {
      for (const skill of item.skills) {
        if (skills.includes(skill.id)) {
          tagged.push(item);
        }
      }
    }

    return tagged;
  }

  return list;
};

export const filterBySkill = list => {
  const skillFilter = getParameterByName(TYPES.skill);

  if (
    Array.isArray(list) &&
    skillFilter &&
    typeof list[0] !== "object" &&
    list[0].skill
  ) {
    const tagged = [];
    debugger;
    for (const item of list) {
      for (const skill of item.skills) {
        if (skill.name.toLowerCase() === skillFilter.toLowerCase()) {
          tagged.push(item);
        }
      }
    }

    return tagged;
  }

  return list;
};

export const getParameterByName = (name, url) => {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  const param = decodeURIComponent(results[2].replace(/\+/g, " "));
  return param && param.includes(",") ? param.trim().split(",") : [param];
};
