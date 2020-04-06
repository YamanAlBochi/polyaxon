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
import io.swagger.client.model.V1ResourceRequirements;
import java.io.IOException;

/**
 * V1PolyaxonInitContainer
 */

public class V1PolyaxonInitContainer {
  @SerializedName("image")
  private String image = null;

  @SerializedName("image_tag")
  private String imageTag = null;

  @SerializedName("image_pull_policy")
  private String imagePullPolicy = null;

  @SerializedName("resources")
  private V1ResourceRequirements resources = null;

  public V1PolyaxonInitContainer image(String image) {
    this.image = image;
    return this;
  }

   /**
   * Get image
   * @return image
  **/
  @ApiModelProperty(value = "")
  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public V1PolyaxonInitContainer imageTag(String imageTag) {
    this.imageTag = imageTag;
    return this;
  }

   /**
   * Get imageTag
   * @return imageTag
  **/
  @ApiModelProperty(value = "")
  public String getImageTag() {
    return imageTag;
  }

  public void setImageTag(String imageTag) {
    this.imageTag = imageTag;
  }

  public V1PolyaxonInitContainer imagePullPolicy(String imagePullPolicy) {
    this.imagePullPolicy = imagePullPolicy;
    return this;
  }

   /**
   * Get imagePullPolicy
   * @return imagePullPolicy
  **/
  @ApiModelProperty(value = "")
  public String getImagePullPolicy() {
    return imagePullPolicy;
  }

  public void setImagePullPolicy(String imagePullPolicy) {
    this.imagePullPolicy = imagePullPolicy;
  }

  public V1PolyaxonInitContainer resources(V1ResourceRequirements resources) {
    this.resources = resources;
    return this;
  }

   /**
   * Get resources
   * @return resources
  **/
  @ApiModelProperty(value = "")
  public V1ResourceRequirements getResources() {
    return resources;
  }

  public void setResources(V1ResourceRequirements resources) {
    this.resources = resources;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1PolyaxonInitContainer v1PolyaxonInitContainer = (V1PolyaxonInitContainer) o;
    return Objects.equals(this.image, v1PolyaxonInitContainer.image) &&
        Objects.equals(this.imageTag, v1PolyaxonInitContainer.imageTag) &&
        Objects.equals(this.imagePullPolicy, v1PolyaxonInitContainer.imagePullPolicy) &&
        Objects.equals(this.resources, v1PolyaxonInitContainer.resources);
  }

  @Override
  public int hashCode() {
    return Objects.hash(image, imageTag, imagePullPolicy, resources);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1PolyaxonInitContainer {\n");
    
    sb.append("    image: ").append(toIndentedString(image)).append("\n");
    sb.append("    imageTag: ").append(toIndentedString(imageTag)).append("\n");
    sb.append("    imagePullPolicy: ").append(toIndentedString(imagePullPolicy)).append("\n");
    sb.append("    resources: ").append(toIndentedString(resources)).append("\n");
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

