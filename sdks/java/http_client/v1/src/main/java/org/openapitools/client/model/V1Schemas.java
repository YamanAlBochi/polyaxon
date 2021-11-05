// Copyright 2018-2021 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.12.2
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import org.openapitools.client.model.V1ArtifactsMount;
import org.openapitools.client.model.V1ArtifactsType;
import org.openapitools.client.model.V1AuthType;
import org.openapitools.client.model.V1CompiledOperation;
import org.openapitools.client.model.V1ConnectionSchema;
import org.openapitools.client.model.V1ConnectionType;
import org.openapitools.client.model.V1EarlyStopping;
import org.openapitools.client.model.V1Event;
import org.openapitools.client.model.V1EventType;
import org.openapitools.client.model.V1GcsType;
import org.openapitools.client.model.V1HpParams;
import org.openapitools.client.model.V1K8sResourceType;
import org.openapitools.client.model.V1Matrix;
import org.openapitools.client.model.V1MatrixKind;
import org.openapitools.client.model.V1Operation;
import org.openapitools.client.model.V1PolyaxonInitContainer;
import org.openapitools.client.model.V1PolyaxonSidecarContainer;
import org.openapitools.client.model.V1Reference;
import org.openapitools.client.model.V1RunSchema;
import org.openapitools.client.model.V1S3Type;
import org.openapitools.client.model.V1Schedule;
import org.openapitools.client.model.V1ScheduleKind;
import org.openapitools.client.model.V1UriType;
import org.openapitools.client.model.V1WasbType;

/**
 * V1Schemas
 */

public class V1Schemas {
  public static final String SERIALIZED_NAME_EARLY_STOPPING = "earlyStopping";
  @SerializedName(SERIALIZED_NAME_EARLY_STOPPING)
  private V1EarlyStopping earlyStopping;

  public static final String SERIALIZED_NAME_MATRIX = "matrix";
  @SerializedName(SERIALIZED_NAME_MATRIX)
  private V1Matrix matrix;

  public static final String SERIALIZED_NAME_RUN = "run";
  @SerializedName(SERIALIZED_NAME_RUN)
  private V1RunSchema run;

  public static final String SERIALIZED_NAME_OPERATION = "operation";
  @SerializedName(SERIALIZED_NAME_OPERATION)
  private V1Operation operation;

  public static final String SERIALIZED_NAME_COMPILED_OPERATION = "compiledOperation";
  @SerializedName(SERIALIZED_NAME_COMPILED_OPERATION)
  private V1CompiledOperation compiledOperation;

  public static final String SERIALIZED_NAME_SCHEDULE = "schedule";
  @SerializedName(SERIALIZED_NAME_SCHEDULE)
  private V1Schedule schedule;

  public static final String SERIALIZED_NAME_CONNECTION_SCHEMA = "connectionSchema";
  @SerializedName(SERIALIZED_NAME_CONNECTION_SCHEMA)
  private V1ConnectionSchema connectionSchema;

  public static final String SERIALIZED_NAME_HP_PARAMS = "hpParams";
  @SerializedName(SERIALIZED_NAME_HP_PARAMS)
  private V1HpParams hpParams;

  public static final String SERIALIZED_NAME_REFERENCE = "reference";
  @SerializedName(SERIALIZED_NAME_REFERENCE)
  private V1Reference reference;

  public static final String SERIALIZED_NAME_ARTIFACTS_MOUNT = "artifactsMount";
  @SerializedName(SERIALIZED_NAME_ARTIFACTS_MOUNT)
  private V1ArtifactsMount artifactsMount;

  public static final String SERIALIZED_NAME_POLYAXON_SIDECAR_CONTAINER = "polyaxonSidecarContainer";
  @SerializedName(SERIALIZED_NAME_POLYAXON_SIDECAR_CONTAINER)
  private V1PolyaxonSidecarContainer polyaxonSidecarContainer;

  public static final String SERIALIZED_NAME_POLYAXON_INIT_CONTAINER = "polyaxonInitContainer";
  @SerializedName(SERIALIZED_NAME_POLYAXON_INIT_CONTAINER)
  private V1PolyaxonInitContainer polyaxonInitContainer;

  public static final String SERIALIZED_NAME_ARTIFACS = "artifacs";
  @SerializedName(SERIALIZED_NAME_ARTIFACS)
  private V1ArtifactsType artifacs;

  public static final String SERIALIZED_NAME_WASB = "wasb";
  @SerializedName(SERIALIZED_NAME_WASB)
  private V1WasbType wasb;

  public static final String SERIALIZED_NAME_GCS = "gcs";
  @SerializedName(SERIALIZED_NAME_GCS)
  private V1GcsType gcs;

  public static final String SERIALIZED_NAME_S3 = "s3";
  @SerializedName(SERIALIZED_NAME_S3)
  private V1S3Type s3;

  public static final String SERIALIZED_NAME_AUTH = "auth";
  @SerializedName(SERIALIZED_NAME_AUTH)
  private V1AuthType auth;

  public static final String SERIALIZED_NAME_URI = "uri";
  @SerializedName(SERIALIZED_NAME_URI)
  private V1UriType uri;

  public static final String SERIALIZED_NAME_K8S_RESOURCE = "k8sResource";
  @SerializedName(SERIALIZED_NAME_K8S_RESOURCE)
  private V1K8sResourceType k8sResource;

  public static final String SERIALIZED_NAME_CONNECTION = "connection";
  @SerializedName(SERIALIZED_NAME_CONNECTION)
  private V1ConnectionType connection;

  public static final String SERIALIZED_NAME_EVENT_TYPE = "eventType";
  @SerializedName(SERIALIZED_NAME_EVENT_TYPE)
  private V1EventType eventType;

  public static final String SERIALIZED_NAME_MATRIX_KIND = "matrixKind";
  @SerializedName(SERIALIZED_NAME_MATRIX_KIND)
  private V1MatrixKind matrixKind = V1MatrixKind.RANDOM;

  public static final String SERIALIZED_NAME_SCHEDULE_KIND = "scheduleKind";
  @SerializedName(SERIALIZED_NAME_SCHEDULE_KIND)
  private V1ScheduleKind scheduleKind = V1ScheduleKind.CRON;

  public static final String SERIALIZED_NAME_EVENT = "event";
  @SerializedName(SERIALIZED_NAME_EVENT)
  private V1Event event;


  public V1Schemas earlyStopping(V1EarlyStopping earlyStopping) {
    
    this.earlyStopping = earlyStopping;
    return this;
  }

   /**
   * Get earlyStopping
   * @return earlyStopping
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1EarlyStopping getEarlyStopping() {
    return earlyStopping;
  }


  public void setEarlyStopping(V1EarlyStopping earlyStopping) {
    this.earlyStopping = earlyStopping;
  }


  public V1Schemas matrix(V1Matrix matrix) {
    
    this.matrix = matrix;
    return this;
  }

   /**
   * Get matrix
   * @return matrix
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Matrix getMatrix() {
    return matrix;
  }


  public void setMatrix(V1Matrix matrix) {
    this.matrix = matrix;
  }


  public V1Schemas run(V1RunSchema run) {
    
    this.run = run;
    return this;
  }

   /**
   * Get run
   * @return run
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1RunSchema getRun() {
    return run;
  }


  public void setRun(V1RunSchema run) {
    this.run = run;
  }


  public V1Schemas operation(V1Operation operation) {
    
    this.operation = operation;
    return this;
  }

   /**
   * Get operation
   * @return operation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Operation getOperation() {
    return operation;
  }


  public void setOperation(V1Operation operation) {
    this.operation = operation;
  }


  public V1Schemas compiledOperation(V1CompiledOperation compiledOperation) {
    
    this.compiledOperation = compiledOperation;
    return this;
  }

   /**
   * Get compiledOperation
   * @return compiledOperation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1CompiledOperation getCompiledOperation() {
    return compiledOperation;
  }


  public void setCompiledOperation(V1CompiledOperation compiledOperation) {
    this.compiledOperation = compiledOperation;
  }


  public V1Schemas schedule(V1Schedule schedule) {
    
    this.schedule = schedule;
    return this;
  }

   /**
   * Get schedule
   * @return schedule
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Schedule getSchedule() {
    return schedule;
  }


  public void setSchedule(V1Schedule schedule) {
    this.schedule = schedule;
  }


  public V1Schemas connectionSchema(V1ConnectionSchema connectionSchema) {
    
    this.connectionSchema = connectionSchema;
    return this;
  }

   /**
   * Get connectionSchema
   * @return connectionSchema
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1ConnectionSchema getConnectionSchema() {
    return connectionSchema;
  }


  public void setConnectionSchema(V1ConnectionSchema connectionSchema) {
    this.connectionSchema = connectionSchema;
  }


  public V1Schemas hpParams(V1HpParams hpParams) {
    
    this.hpParams = hpParams;
    return this;
  }

   /**
   * Get hpParams
   * @return hpParams
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1HpParams getHpParams() {
    return hpParams;
  }


  public void setHpParams(V1HpParams hpParams) {
    this.hpParams = hpParams;
  }


  public V1Schemas reference(V1Reference reference) {
    
    this.reference = reference;
    return this;
  }

   /**
   * Get reference
   * @return reference
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Reference getReference() {
    return reference;
  }


  public void setReference(V1Reference reference) {
    this.reference = reference;
  }


  public V1Schemas artifactsMount(V1ArtifactsMount artifactsMount) {
    
    this.artifactsMount = artifactsMount;
    return this;
  }

   /**
   * Get artifactsMount
   * @return artifactsMount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1ArtifactsMount getArtifactsMount() {
    return artifactsMount;
  }


  public void setArtifactsMount(V1ArtifactsMount artifactsMount) {
    this.artifactsMount = artifactsMount;
  }


  public V1Schemas polyaxonSidecarContainer(V1PolyaxonSidecarContainer polyaxonSidecarContainer) {
    
    this.polyaxonSidecarContainer = polyaxonSidecarContainer;
    return this;
  }

   /**
   * Get polyaxonSidecarContainer
   * @return polyaxonSidecarContainer
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1PolyaxonSidecarContainer getPolyaxonSidecarContainer() {
    return polyaxonSidecarContainer;
  }


  public void setPolyaxonSidecarContainer(V1PolyaxonSidecarContainer polyaxonSidecarContainer) {
    this.polyaxonSidecarContainer = polyaxonSidecarContainer;
  }


  public V1Schemas polyaxonInitContainer(V1PolyaxonInitContainer polyaxonInitContainer) {
    
    this.polyaxonInitContainer = polyaxonInitContainer;
    return this;
  }

   /**
   * Get polyaxonInitContainer
   * @return polyaxonInitContainer
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1PolyaxonInitContainer getPolyaxonInitContainer() {
    return polyaxonInitContainer;
  }


  public void setPolyaxonInitContainer(V1PolyaxonInitContainer polyaxonInitContainer) {
    this.polyaxonInitContainer = polyaxonInitContainer;
  }


  public V1Schemas artifacs(V1ArtifactsType artifacs) {
    
    this.artifacs = artifacs;
    return this;
  }

   /**
   * Get artifacs
   * @return artifacs
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1ArtifactsType getArtifacs() {
    return artifacs;
  }


  public void setArtifacs(V1ArtifactsType artifacs) {
    this.artifacs = artifacs;
  }


  public V1Schemas wasb(V1WasbType wasb) {
    
    this.wasb = wasb;
    return this;
  }

   /**
   * Get wasb
   * @return wasb
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1WasbType getWasb() {
    return wasb;
  }


  public void setWasb(V1WasbType wasb) {
    this.wasb = wasb;
  }


  public V1Schemas gcs(V1GcsType gcs) {
    
    this.gcs = gcs;
    return this;
  }

   /**
   * Get gcs
   * @return gcs
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1GcsType getGcs() {
    return gcs;
  }


  public void setGcs(V1GcsType gcs) {
    this.gcs = gcs;
  }


  public V1Schemas s3(V1S3Type s3) {
    
    this.s3 = s3;
    return this;
  }

   /**
   * Get s3
   * @return s3
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1S3Type getS3() {
    return s3;
  }


  public void setS3(V1S3Type s3) {
    this.s3 = s3;
  }


  public V1Schemas auth(V1AuthType auth) {
    
    this.auth = auth;
    return this;
  }

   /**
   * Get auth
   * @return auth
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1AuthType getAuth() {
    return auth;
  }


  public void setAuth(V1AuthType auth) {
    this.auth = auth;
  }


  public V1Schemas uri(V1UriType uri) {
    
    this.uri = uri;
    return this;
  }

   /**
   * Get uri
   * @return uri
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1UriType getUri() {
    return uri;
  }


  public void setUri(V1UriType uri) {
    this.uri = uri;
  }


  public V1Schemas k8sResource(V1K8sResourceType k8sResource) {
    
    this.k8sResource = k8sResource;
    return this;
  }

   /**
   * Get k8sResource
   * @return k8sResource
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1K8sResourceType getK8sResource() {
    return k8sResource;
  }


  public void setK8sResource(V1K8sResourceType k8sResource) {
    this.k8sResource = k8sResource;
  }


  public V1Schemas connection(V1ConnectionType connection) {
    
    this.connection = connection;
    return this;
  }

   /**
   * Get connection
   * @return connection
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1ConnectionType getConnection() {
    return connection;
  }


  public void setConnection(V1ConnectionType connection) {
    this.connection = connection;
  }


  public V1Schemas eventType(V1EventType eventType) {
    
    this.eventType = eventType;
    return this;
  }

   /**
   * Get eventType
   * @return eventType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1EventType getEventType() {
    return eventType;
  }


  public void setEventType(V1EventType eventType) {
    this.eventType = eventType;
  }


  public V1Schemas matrixKind(V1MatrixKind matrixKind) {
    
    this.matrixKind = matrixKind;
    return this;
  }

   /**
   * Get matrixKind
   * @return matrixKind
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1MatrixKind getMatrixKind() {
    return matrixKind;
  }


  public void setMatrixKind(V1MatrixKind matrixKind) {
    this.matrixKind = matrixKind;
  }


  public V1Schemas scheduleKind(V1ScheduleKind scheduleKind) {
    
    this.scheduleKind = scheduleKind;
    return this;
  }

   /**
   * Get scheduleKind
   * @return scheduleKind
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1ScheduleKind getScheduleKind() {
    return scheduleKind;
  }


  public void setScheduleKind(V1ScheduleKind scheduleKind) {
    this.scheduleKind = scheduleKind;
  }


  public V1Schemas event(V1Event event) {
    
    this.event = event;
    return this;
  }

   /**
   * Get event
   * @return event
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Event getEvent() {
    return event;
  }


  public void setEvent(V1Event event) {
    this.event = event;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Schemas v1Schemas = (V1Schemas) o;
    return Objects.equals(this.earlyStopping, v1Schemas.earlyStopping) &&
        Objects.equals(this.matrix, v1Schemas.matrix) &&
        Objects.equals(this.run, v1Schemas.run) &&
        Objects.equals(this.operation, v1Schemas.operation) &&
        Objects.equals(this.compiledOperation, v1Schemas.compiledOperation) &&
        Objects.equals(this.schedule, v1Schemas.schedule) &&
        Objects.equals(this.connectionSchema, v1Schemas.connectionSchema) &&
        Objects.equals(this.hpParams, v1Schemas.hpParams) &&
        Objects.equals(this.reference, v1Schemas.reference) &&
        Objects.equals(this.artifactsMount, v1Schemas.artifactsMount) &&
        Objects.equals(this.polyaxonSidecarContainer, v1Schemas.polyaxonSidecarContainer) &&
        Objects.equals(this.polyaxonInitContainer, v1Schemas.polyaxonInitContainer) &&
        Objects.equals(this.artifacs, v1Schemas.artifacs) &&
        Objects.equals(this.wasb, v1Schemas.wasb) &&
        Objects.equals(this.gcs, v1Schemas.gcs) &&
        Objects.equals(this.s3, v1Schemas.s3) &&
        Objects.equals(this.auth, v1Schemas.auth) &&
        Objects.equals(this.uri, v1Schemas.uri) &&
        Objects.equals(this.k8sResource, v1Schemas.k8sResource) &&
        Objects.equals(this.connection, v1Schemas.connection) &&
        Objects.equals(this.eventType, v1Schemas.eventType) &&
        Objects.equals(this.matrixKind, v1Schemas.matrixKind) &&
        Objects.equals(this.scheduleKind, v1Schemas.scheduleKind) &&
        Objects.equals(this.event, v1Schemas.event);
  }

  @Override
  public int hashCode() {
    return Objects.hash(earlyStopping, matrix, run, operation, compiledOperation, schedule, connectionSchema, hpParams, reference, artifactsMount, polyaxonSidecarContainer, polyaxonInitContainer, artifacs, wasb, gcs, s3, auth, uri, k8sResource, connection, eventType, matrixKind, scheduleKind, event);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Schemas {\n");
    sb.append("    earlyStopping: ").append(toIndentedString(earlyStopping)).append("\n");
    sb.append("    matrix: ").append(toIndentedString(matrix)).append("\n");
    sb.append("    run: ").append(toIndentedString(run)).append("\n");
    sb.append("    operation: ").append(toIndentedString(operation)).append("\n");
    sb.append("    compiledOperation: ").append(toIndentedString(compiledOperation)).append("\n");
    sb.append("    schedule: ").append(toIndentedString(schedule)).append("\n");
    sb.append("    connectionSchema: ").append(toIndentedString(connectionSchema)).append("\n");
    sb.append("    hpParams: ").append(toIndentedString(hpParams)).append("\n");
    sb.append("    reference: ").append(toIndentedString(reference)).append("\n");
    sb.append("    artifactsMount: ").append(toIndentedString(artifactsMount)).append("\n");
    sb.append("    polyaxonSidecarContainer: ").append(toIndentedString(polyaxonSidecarContainer)).append("\n");
    sb.append("    polyaxonInitContainer: ").append(toIndentedString(polyaxonInitContainer)).append("\n");
    sb.append("    artifacs: ").append(toIndentedString(artifacs)).append("\n");
    sb.append("    wasb: ").append(toIndentedString(wasb)).append("\n");
    sb.append("    gcs: ").append(toIndentedString(gcs)).append("\n");
    sb.append("    s3: ").append(toIndentedString(s3)).append("\n");
    sb.append("    auth: ").append(toIndentedString(auth)).append("\n");
    sb.append("    uri: ").append(toIndentedString(uri)).append("\n");
    sb.append("    k8sResource: ").append(toIndentedString(k8sResource)).append("\n");
    sb.append("    connection: ").append(toIndentedString(connection)).append("\n");
    sb.append("    eventType: ").append(toIndentedString(eventType)).append("\n");
    sb.append("    matrixKind: ").append(toIndentedString(matrixKind)).append("\n");
    sb.append("    scheduleKind: ").append(toIndentedString(scheduleKind)).append("\n");
    sb.append("    event: ").append(toIndentedString(event)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

