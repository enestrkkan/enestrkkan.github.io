// Renseigne l'URL de ton GitLab ici : les liens GitLab du site s'affichent automatiquement.
const GITLAB_URL = '';

if (GITLAB_URL) {
  for (const id of ['gitlab-btn', 'gitlab-inline']) document.getElementById(id).href = GITLAB_URL;
  document.getElementById('gitlab-btn').hidden = false;
  document.getElementById('gitlab-note').hidden = false;
}
