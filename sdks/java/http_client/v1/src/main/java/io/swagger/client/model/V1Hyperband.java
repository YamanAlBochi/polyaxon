// Copyright 2018-2020 Polyaxon, Inc.
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
 * OpenAPI spec version: 1.0.73
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.V1OptimizationMetric;
import io.swagger.client.model.V1OptimizationResource;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * V1Hyperband
 */

public class V1Hyperband {
  @SerializedName("kind")
  private String kind = "hyperband";

  @SerializedName("params")
  private Map<String, Object> params = null;

  @SerializedName("max_iterations")
  private Integer maxIterations = null;

  @SerializedName("eta")
  private Integer eta = null;

  @SerializedName("resource")
  private V1OptimizationResource resource = null;

  @SerializedName("metric")
  private V1OptimizationMetric metric = null;

  @SerializedName("resume")
  private Boolean resume = null;

  @SerializedName("seed")
  private Integer seed = null;

  @SerializedName("concurrency")
  private Integer concurrency = null;

  @SerializedName("early_stopping")
  private List<Object> earlyStopping = null;

  public V1Hyperband kind(String kind) {
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @ApiModelProperty(value = "")
  public String getKind() {
    return kind;
  }

  public void setKind(String kind) {
    this.kind = kind;
  }

  public V1Hyperband params(Map<String, Object> params) {
    this.params = params;
    return this;
  }

  public V1Hyperband putParamsItem(String key, Object paramsItem) {
    if (this.params == null) {
      this.params = new HashMap<String, Object>();
    }
    this.params.put(key, paramsItem);
    return this;
  }

   /**
   * Get params
   * @return params
  **/
  @ApiModelProperty(value = "")
  public Map<String, Object> getParams() {
    return params;
  }

  public void setParams(Map<String, Object> params) {
    this.params = params;
  }

  public V1Hyperband maxIterations(Integer maxIterations) {
    this.maxIterations = maxIterations;
    return this;
  }

   /**
   * Get maxIterations
   * @return maxIterations
  **/
  @ApiModelProperty(value = "")
  public Integer getMaxIterations() {
    return maxIterations;
  }

  public void setMaxIterations(Integer maxIterations) {
    this.maxIterations = maxIterations;
  }

  public V1Hyperband eta(Integer eta) {
    this.eta = eta;
    return this;
  }

   /**
   * Get eta
   * @return eta
  **/
  @ApiModelProperty(value = "")
  public Integer getEta() {
    return eta;
  }

  public void setEta(Integer eta) {
    this.eta = eta;
  }

  public V1Hyperband resource(V1OptimizationResource resource) {
    this.resource = resource;
    return this;
  }

   /**
   * Get resource
   * @return resource
  **/
  @ApiModelProperty(value = "")
  public V1OptimizationResource getResource() {
    return resource;
  }

  public void setResource(V1OptimizationResource resource) {
    this.resource = resource;
  }

  public V1Hyperband metric(V1OptimizationMetric metric) {
    this.metric = metric;
    return this;
  }

   /**
   * Get metric
   * @return metric
  **/
  @ApiModelProperty(value = "")
  public V1OptimizationMetric getMetric() {
    return metric;
  }

  public void setMetric(V1OptimizationMetric metric) {
    this.metric = metric;
  }

  public V1Hyperband resume(Boolean resume) {
    this.resume = resume;
    return this;
  }

   /**
   * Get resume
   * @return resume
  **/
  @ApiModelProperty(value = "")
  public Boolean isResume() {
    return resume;
  }

  public void setResume(Boolean resume) {
    this.resume = resume;
  }

  public V1Hyperband seed(Integer seed) {
    this.seed = seed;
    return this;
  }

   /**
   * Get seed
   * @return seed
  **/
  @ApiModelProperty(value = "")
  public Integer getSeed() {
    return seed;
  }

  public void setSeed(Integer seed) {
    this.seed = seed;
  }

  public V1Hyperband concurrency(Integer concurrency) {
    this.concurrency = concurrency;
    return this;
  }

   /**
   * Get concurrency
   * @return concurrency
  **/
  @ApiModelProperty(value = "")
  public Integer getConcurrency() {
    return concurrency;
  }

  public void setConcurrency(Integer concurrency) {
    this.concurrency = concurrency;
  }

  public V1Hyperband earlyStopping(List<Object> earlyStopping) {
    this.earlyStopping = earlyStopping;
    return this;
  }

  public V1Hyperband addEarlyStoppingItem(Object earlyStoppingItem) {
    if (this.earlyStopping == null) {
      this.earlyStopping = new ArrayList<Object>();
    }
    this.earlyStopping.add(earlyStoppingItem);
    return this;
  }

   /**
   * Get earlyStopping
   * @return earlyStopping
  **/
  @ApiModelProperty(value = "")
  public List<Object> getEarlyStopping() {
    return earlyStopping;
  }

  public void setEarlyStopping(List<Object> earlyStopping) {
    this.earlyStopping = earlyStopping;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Hyperband v1Hyperband = (V1Hyperband) o;
    return Objects.equals(this.kind, v1Hyperband.kind) &&
        Objects.equals(this.params, v1Hyperband.params) &&
        Objects.equals(this.maxIterations, v1Hyperband.maxIterations) &&
        Objects.equals(this.eta, v1Hyperband.eta) &&
        Objects.equals(this.resource, v1Hyperband.resource) &&
        Objects.equals(this.metric, v1Hyperband.metric) &&
        Objects.equals(this.resume, v1Hyperband.resume) &&
        Objects.equals(this.seed, v1Hyperband.seed) &&
        Objects.equals(this.concurrency, v1Hyperband.concurrency) &&
        Objects.equals(this.earlyStopping, v1Hyperband.earlyStopping);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, params, maxIterations, eta, resource, metric, resume, seed, concurrency, earlyStopping);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Hyperband {\n");
    
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    params: ").append(toIndentedString(params)).append("\n");
    sb.append("    maxIterations: ").append(toIndentedString(maxIterations)).append("\n");
    sb.append("    eta: ").append(toIndentedString(eta)).append("\n");
    sb.append("    resource: ").append(toIndentedString(resource)).append("\n");
    sb.append("    metric: ").append(toIndentedString(metric)).append("\n");
    sb.append("    resume: ").append(toIndentedString(resume)).append("\n");
    sb.append("    seed: ").append(toIndentedString(seed)).append("\n");
    sb.append("    concurrency: ").append(toIndentedString(concurrency)).append("\n");
    sb.append("    earlyStopping: ").append(toIndentedString(earlyStopping)).append("\n");
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

