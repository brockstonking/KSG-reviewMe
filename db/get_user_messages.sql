SELECT * FROM sent_messages
WHERE user_id = $1
ORDER BY message_id DESC
LIMIT 10;