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
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * V1ProjectSettings
 */

public class V1ProjectSettings {
  @SerializedName("artifacts_store")
  private String artifactsStore = null;

  @SerializedName("connections")
  private List<String> connections = null;

  @SerializedName("run_profile")
  private String runProfile = null;

  @SerializedName("run_profiles")
  private List<String> runProfiles = null;

  public V1ProjectSettings artifactsStore(String artifactsStore) {
    this.artifactsStore = artifactsStore;
    return this;
  }

   /**
   * Get artifactsStore
   * @return artifactsStore
  **/
  @ApiModelProperty(value = "")
  public String getArtifactsStore() {
    return artifactsStore;
  }

  public void setArtifactsStore(String artifactsStore) {
    this.artifactsStore = artifactsStore;
  }

  public V1ProjectSettings connections(List<String> connections) {
    this.connections = connections;
    return this;
  }

  public V1ProjectSettings addConnectionsItem(String connectionsItem) {
    if (this.connections == null) {
      this.connections = new ArrayList<String>();
    }
    this.connections.add(connectionsItem);
    return this;
  }

   /**
   * Get connections
   * @return connections
  **/
  @ApiModelProperty(value = "")
  public List<String> getConnections() {
    return connections;
  }

  public void setConnections(List<String> connections) {
    this.connections = connections;
  }

  public V1ProjectSettings runProfile(String runProfile) {
    this.runProfile = runProfile;
    return this;
  }

   /**
   * Get runProfile
   * @return runProfile
  **/
  @ApiModelProperty(value = "")
  public String getRunProfile() {
    return runProfile;
  }

  public void setRunProfile(String runProfile) {
    this.runProfile = runProfile;
  }

  public V1ProjectSettings runProfiles(List<String> runProfiles) {
    this.runProfiles = runProfiles;
    return this;
  }

  public V1ProjectSettings addRunProfilesItem(String runProfilesItem) {
    if (this.runProfiles == null) {
      this.runProfiles = new ArrayList<String>();
    }
    this.runProfiles.add(runProfilesItem);
    return this;
  }

   /**
   * Get runProfiles
   * @return runProfiles
  **/
  @ApiModelProperty(value = "")
  public List<String> getRunProfiles() {
    return runProfiles;
  }

  public void setRunProfiles(List<String> runProfiles) {
    this.runProfiles = runProfiles;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1ProjectSettings v1ProjectSettings = (V1ProjectSettings) o;
    return Objects.equals(this.artifactsStore, v1ProjectSettings.artifactsStore) &&
        Objects.equals(this.connections, v1ProjectSettings.connections) &&
        Objects.equals(this.runProfile, v1ProjectSettings.runProfile) &&
        Objects.equals(this.runProfiles, v1ProjectSettings.runProfiles);
  }

  @Override
  public int hashCode() {
    return Objects.hash(artifactsStore, connections, runProfile, runProfiles);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1ProjectSettings {\n");
    
    sb.append("    artifactsStore: ").append(toIndentedString(artifactsStore)).append("\n");
    sb.append("    connections: ").append(toIndentedString(connections)).append("\n");
    sb.append("    runProfile: ").append(toIndentedString(runProfile)).append("\n");
    sb.append("    runProfiles: ").append(toIndentedString(runProfiles)).append("\n");
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

