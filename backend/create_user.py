import requests

# Replace this with your actual API URL
API_URL = "http://localhost:8000/users/create-superuser"

# Example data – adjust as needed
user_data = {
    "username": "asdasasda",
    "email": "admin@sasdasdasdda.com",
    "full_name": "Admin User",
    "password": "securepassword123",
    "is_active": True,
    "is_superuser": True
}

# Send POST request
response = requests.post(
    API_URL,
    json=user_data
)

# Output response
print("Status Code:", response.status_code)
try:
    print("Response Body:", response.json())
except requests.exceptions.JSONDecodeError:
    print("Raw Response:", response.text)