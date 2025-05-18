import os
import requests

def commit_to_github(file_path, content, message):
    token = os.getenv("GITHUB_TOKEN")
    repo = os.getenv("GITHUB_REPO")
    url = f"https://api.github.com/repos/{repo}/contents/{file_path}"
    headers = {"Authorization": f"token {token}"}
    data = {
        "message": message,
        "content": content.encode("utf-8").decode("utf-8"),
        "branch": "main"
    }
    response = requests.put(url, headers=headers, json=data)
    return response.json()
