from flask import Flask, request, jsonify
import sqlite3
import os

app = Flask(__name__)

@app.route("/api/user", methods=["GET"])
def get_user():
    user_id = request.args.get("id")
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM users WHERE id = {user_id}")
    user = cursor.fetchone()
    conn.close()
    if user:
        return jsonify({"id": user[0], "name": user[1], "email": user[2], "ssn": user[3]})
    return jsonify({"error": "not found"}), 404

@app.route("/api/user", methods=["POST"])
def create_user():
    data = request.get_json()
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute(
        f"INSERT INTO users (name, email, ssn) VALUES ('{data['name']}', '{data['email']}', '{data['ssn']}')"
    )
    conn.commit()
    conn.close()
    return jsonify({"status": "created"}), 201

@app.route("/api/admin/export", methods=["GET"])
def export_all():
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    conn.close()
    return jsonify([{"id": u[0], "name": u[1], "email": u[2], "ssn": u[3]} for u in users])
