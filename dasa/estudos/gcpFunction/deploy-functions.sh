gcloud auth activate-service-account --key-file "${PWD}/client-secret.json" || die "unable to authenticate service account for gcloud"
gcloud --quiet config set project poc-dasa-functions-grafana

gcloud functions deploy receiveNotification --trigger-http \
  --security-level=secure-always \
  --allow-unauthenticated \
  --entry-point=receiveNotification \
  --runtime=nodejs20 \
  --set-env-vars SNS_TOPIC_ARN=arn:aws:sns:us-east-2:993036375897:gcp-topic