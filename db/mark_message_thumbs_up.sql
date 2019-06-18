update sent_messages
set interaction_status = 'Thumbs up'
where message_id = $1;