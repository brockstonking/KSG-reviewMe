update sent_messages
set interaction_status = 'Thumbs down'
where message_id = $1;